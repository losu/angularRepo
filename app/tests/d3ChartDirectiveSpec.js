describe('d3ChartDirectiveTest', function () {

    var $compile, $rootScope;

    beforeEach(module('d3ChartModule'));
    beforeEach(module('d3Chart/d3ChartTemplate.html'));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should html not contain the name of the direvtive as an element', function () {
        var element = $compile("<chart></chart>")($rootScope);

        //fire a;; the watches so the link expression will be evaluated
        $rootScope.$digest();


        expect(element[0].outerHTML).not.toContain('<chart></chart>');
    })

    it('should contain element h1', function () {
        var element = $compile("<chart></chart>")($rootScope);

        //fire a;; the watches so the link expression will be evaluated
        $rootScope.$digest();


        expect(element.html()).toContain('<h1>Chart</h1>');
    })


    //        it('should fixed amount of rect', function () {
    //            var element = $compile("<chart></chart>")($rootScope);
    //    
    //            //fire a;; the watches so the link expression will be evaluated
    //            $rootScope.$digest();
    //            var n = document.querySelectorAll($("div[class='chart']"));
    //            var count;
    //    
    //            $("div[class='chart']").each(function () {
    //                count = 0;
    //                if ($("div[class='chart']>rect")) {
    //                    count += 1;
    //                }
    //            })
    //             d3.select("div").attr("class", "chart").select("svg").each
    //            expect(count).toEqual(11);
    //        })


});