/**
 * ng-context-menu - v1.0.1 - An AngularJS directive to display a context menu
 * when a right-click event is triggered
 *
 * @author Ian Kennington Walter (http://ianvonwalter.com)
 */
angular.module('ng-context-menu', [])
	.factory('ContextMenuService', function() {
		return {
			element: null,
			menuElement: null
		};
	})
	.directive('contextMenu', ['$document', 'ContextMenuService', function($document, ContextMenuService) {
		return {
			restrict: 'A',
			scope: {
				'callback': '&contextMenu',
				'disabled': '&contextMenuDisabled',
				'closeCallback': '&contextMenuClose'
			},
			link: function(scope, element, attrs) {
				var opened = false;
				scope.selectedId = (scope.$parent.$modelValue)? scope.$parent.$modelValue.id : attrs.id;

				function open(event, menuElement) {
					menuElement.addClass('open');
					var doc = $document[0].documentElement;
					var docLeft = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
					var docTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
					var elementWidth = menuElement[0].scrollWidth;
					var elementHeight = menuElement[0].scrollHeight;
					
					var docWidth = doc.clientWidth + docLeft;
					var docHeight = doc.clientHeight + docTop;
					var totalWidth = elementWidth + event.pageX;
					var totalHeight = elementHeight + event.pageY;
					var left = Math.max(event.pageX - docLeft, 0);
					var top = Math.max(event.pageY - docTop, 0);

					if (totalWidth > docWidth) {
						left = left - (totalWidth - docWidth);
					}

					if (totalHeight > docHeight) {
						top = top - (totalHeight - docHeight);
					}

					menuElement.css('top', top + 'px');
					menuElement.css('left', left + 'px');
					opened = true;
				}

				function close(menuElement) {
					if (menuElement) {
						menuElement.removeClass('open');
					}
					if (opened) {
						scope.closeCallback();
					}
					opened = false;
				}

				element.bind('contextmenu', function(event) {
					if (!scope.disabled()) {
						if (ContextMenuService.menuElement !== null) {
							close(ContextMenuService.menuElement);
						}
						ContextMenuService.menuElement = angular.element(document.getElementById(attrs.target));
						ContextMenuService.element = event.target;
						//console.log('set', ContextMenuService.element);
						console.log('selected id : ', scope.selectedId);
						
						scope.$emit('selectedIdByContextMenu', scope.$parent.$modelValue);
						
						ContextMenuService.menuElement.data({selectedid : scope.selectedId});
						
						
						event.preventDefault();
						event.stopPropagation();
						scope.$apply(function() {
							scope.callback({ $event: event });
						});
						
						scope.$apply(function() {
							open(event, ContextMenuService.menuElement);
						});
					}
				});
				
				element.bind('mousedown', function(event) {
					close(ContextMenuService.menuElement);
				});

				function handleKeyUpEvent(event) {
					//console.log('keyup');
					if (!scope.disabled() && opened && event.keyCode === 27) {
						scope.$apply(function() {
							close(ContextMenuService.menuElement);
						});
					}
				}

				function handleClickEvent(event) {
					if (!scope.disabled() && opened && (event.button !== 2 || event.target !== ContextMenuService.menuElement)) {
						scope.$apply(function() {
							close(ContextMenuService.menuElement);
						});
					}
				}

				$document.bind('keyup', handleKeyUpEvent);
				// Firefox treats a right-click as a click and a contextmenu event
				// while other browsers just treat it as a contextmenu event
				$document.bind('click', handleClickEvent);
				$document.bind('contextmenu', handleClickEvent);

				scope.$on('$destroy', function() {
					//console.log('destroy');
					$document.unbind('keyup', handleKeyUpEvent);
					$document.unbind('click', handleClickEvent);
					$document.unbind('contextmenu', handleClickEvent);
				});
			}
		};
	}
]);
