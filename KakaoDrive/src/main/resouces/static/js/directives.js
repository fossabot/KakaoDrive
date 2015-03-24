(function ( angular ) {
'use strict';

/* Directives */

var directives = angular.module('com.kakao.drive.web.directives', []);

	directives.directive( 'treeView', ['$http', '$compile', '$templateCache', function( $http, $compile, $templateCache ) {
		return {
			restrict: 'A',
			replace: true,
			transclude: true,
			templateUrl: '/templates/treeview.html',
			scope: {
				treeModel: '=',
			},
			link: function(scope, element, attrs) {
				console.log('e');
				
			},
			compile: function(element, attrs, transclude) {
				var contents = element.contents().remove();
				var compiledContents;
				
				
				return function ( scope, element, attrs ) {
					if(!compiledContents) {
						compiledContents = $compile(contents, transclude);
					}
					
					compiledContents(scope, function(clone, scope) {
						element.append(clone); 
					});
					
					scope.$watch("treeModel", function updateNodeOnRootScope(newValue) {
						console.log(newValue);
					});
				}
			}
		};
	}]);

	directives.directive('flexSplitbar', [ '$document', function($document) {
		return function(socpe, element, attr) {
			var startX = 0;

			var option = {
				leftElement : attr.left,
				rightElement : attr.right,
				barElement : element,
				minSize : attr.min || 150,
				maxSize : attr.max || 500,
				width : attr.size || 4,
				unit : 'px',
				callback : function() {
				}
			};

			element.css({
				width : option.width + option.unit
			});

			element.on('mousedown', function(event) {
				event.preventDefault();
				
				$document.on('mousemove', mousemove);
				$document.on('mouseup', mouseup);
				
				startX = event.pageX + event.layerX;
			});

			function mousemove(event) {
				var x = startX - (startX - event.x) - option.width/2;
				x = Math.min(option.maxSize, Math.max(option.minSize, x));
				
				$('#' + option.leftElement).css({
					width: x + option.unit,
					marginRight: (x*-1) + option.unit
				});
			
				$('#' + option.rightElement).css({
					marginLeft: x + option.unit
				});
			
				element.css({
					left : x + option.unit,
					opacity : 0.5
				});
			};

			function mouseup() {
				element.css({
					opacity : 1
				});
				$document.off('mousemove', mousemove);
				$document.off('mouseup', mouseup);
			}
		};
	}]);

})( angular );