'use strict';

/* Directives */

var directives = angular.module('com.kakao.drive.web.directives', []);

directives.directive('flexSplitbar', [ '$document', function($document) {
    return function(socpe, element, attr) {
        var startX = 0;
        
        var option = {
            leftElement : attr.left,
            rightElement : attr.right,
            barElement : element,
            minSize : 150,
            maxSize : 500,
            width : 4,
            unit : 'px',
            callback : function() {
            }
        };
        
        element.css({
            width : option.width + option.unit
        });
        
        restrict: 'A', element.on('mousedown', function(event) {
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
} ]);