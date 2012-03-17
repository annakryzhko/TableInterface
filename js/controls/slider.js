function SliderInputCreator(selector) {
    var ui_slider = $(selector);

    ui_slider.each(function (index, element) {
        var $elem = $(element), sl_inp;
        sl_inp = new SliderInput($elem)
    });


}

function SliderInput($elem) {
    var slider_obj, $wrapper;

    slider_obj = createSlider($elem);
    setSliderValue();
    $elem.on("keydown", onKeyDown);
    $elem.on("change", setSliderValue);

    function onKeyDown(e) {
        switch (e.keyCode) {
            case utils.KEY.UP:
                makeStep(e.target, 1);
                e.preventDefault();
                e.stopPropagation();
                break;
            case utils.KEY.DOWN:
                makeStep(e.target, -1);
                e.preventDefault();
                e.stopPropagation();
                break;
            case utils.KEY.ENTER:
                setSliderValue();
                e.preventDefault();
                e.stopPropagation();
            default: break;
        }
    }
    
    function setSliderValue() {
        var val = $elem.val();
        val = parseInt(val);
        if (val || val === 0) {
            slider_obj.slideTo(val);
        }
        else if (val === "") {
            slider_obj.slideToDefault();
        }

    }
    function makeStep(obj, step) {
        var pos = obj.selectionStart;
        slider_obj.makeStep(step);
        obj.selectionStart = pos;
        obj.selectionEnd = pos;
    }

    function setValue(val) {
        $elem.val(val);
    }

    function dataInit() {
        var data = {};
        data.min = $elem.attr("data-min") - 0;
        data.max = $elem.attr("data-max") - 0;
        data.step = $elem.attr("data-step") - 0;
        data.dif = data.max - data.min;
        return data;
    }

    function createSlider() {
        var $cnt = $('<div></div'), 
            slider_obj, data, config = {};
        $wrapper = $("<div></div>").addClass("ui-slider-wrapper");

        $elem.wrap($wrapper);
        $cnt.insertAfter($elem);
       
        
        config.slider_width = $elem.outerWidth();
        config.container = $cnt;
        config.callback = setValue;
        config.data = dataInit($elem);
        slider_obj = new Slider(config);
        return slider_obj;
    }
}

function Slider(config) {
    var $container = config.container,
        data = config.data,
        $icon, x, endX,
        slider_width = config.slider_width,
        startX, endX, intercept, proportion,
        interId = null,
        half_icon_width;

    this.makeStep = function (step) {
        x = x + step * intercept;
        move();
        config.callback(getValue());
    }

    this.slideTo = function (value) {
        x = (value - data.min) / proportion + startX;
        move();
    }
    this.slideToDefault = function () {
        x = startX;
        move();
    }
    function restrictX() {
        x = (x < startX) ? startX : x;
        x = (x > endX) ? endX : x;
    }

    function getXCoord(pageX) {
        return pageX - $container.offset().left - half_icon_width;
    }

    function getValue() {
        var val;
        val = Math.floor(data.min + (x - startX) * proportion);
        return val;
    }

    function init() {
        $container.addClass("ui-slider-cont").css('width', slider_width);
        $icon = $("<div></div>", { 'class': 'ui-slider-icon' });
        $icon.appendTo($container);
        if (data.max < 1000) {
            $("<div></div>").addClass("ui-slider-min").text(data.min).appendTo($container);
            $("<div></div>").addClass("ui-slider-max").text(data.max).appendTo($container);
        }
        half_icon_width = $icon.width() / 2;
        endX = slider_width - half_icon_width;
        startX = -half_icon_width;
        x = startX;
        proportion = data.dif / slider_width;
        intercept = data.step / proportion;
        $icon.on("mousedown", onMouseDown);
        $(document).on("mouseup", onMouseUp);
    }

    function move() {
        restrictX();
        $icon.css('left', x + "px");
        
    }

    function onMouseMove(e) {
        x = getXCoord(e.pageX);
        e.preventDefault();
        e.stopPropagation();
    }

    function onMouseDown(e) {
        x = getXCoord(e.pageX);
        $container.on("mousemove", onMouseMove);
        interId = setInterval(function (e) { move(e); config.callback(getValue()); }, 10);
        e.preventDefault();
        e.stopPropagation();
    }

    function onMouseUp(e) {
        clearInterval(interId);
        $container.off("mousemove", onMouseMove);
        e.preventDefault();
        e.stopPropagation();
    }

    init();

}

