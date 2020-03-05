$(function () {

    localStorage.clear();

    $('select').customSelect();

    $('.constructor-item-element path').on('mouseover', function () {
        var parent = $(this).parent();
        var parentId = parent.attr('data-id');
        var element = $('[data-id="' + parentId + '"]');
        element.addClass('hover');
        $('[data-extra="' + parentId + '"]').addClass('hover');
    }).on('mouseleave', function () {
        var parentId = $(this).parent().attr('data-id');
        $('[data-id="' + parentId + '"]').removeClass('hover');
        $('[data-extra="' + parentId + '"]').removeClass('hover');
    }).on('click', function () {
        $('.constructor-item-element').removeClass('active');
        var colorGet = localStorage.getItem('color');
        var parent = $(this).parent();
        var parentId = parent.attr('data-id');
        var element = $('[data-id="' + parentId + '"]');
        var elementExtra = $('[data-extra="' + parentId + '"]');
        var elementExtraId = elementExtra.attr('data-id');
        var dataPrev = $('.preview-chain-val[data-target="' + parentId + '"]');
        var dataPrevExtra = $('.preview-chain-val[data-target="' + elementExtraId + '"]');
        element.addClass('active');
        elementExtra.addClass('active');
        if (colorGet != null) {
            element.attr('data-color', colorGet);
            elementExtra.attr('data-color', colorGet);
            dataPrev.html(colorGet).val(colorGet);
            dataPrevExtra.html(colorGet).val(colorGet);
        }
        localStorage.removeItem('all');
    });

    $('.constructor-schematics-item').on('mouseover', function () {
        var sTarget = $(this).attr('data-target');
        $('[data-id="' + sTarget + '"]').addClass('hover');
        $('[data-extra="' + sTarget + '"]').addClass('hover');
    }).on('mouseleave', function () {
        var sTarget = $(this).attr('data-target');
        $('[data-id="' + sTarget + '"]').removeClass('hover');
        $('[data-extra="' + sTarget + '"]').removeClass('hover');
    }).on('click', function () {
        $('.constructor-item-element').removeClass('active');
        var colorGet = localStorage.getItem('color');
        var sTarget = $(this).attr('data-target');
        var sElement = $('[data-id="' + sTarget + '"]');
        var sElementExtra = $('[data-extra="' + sTarget + '"]');
        var sElementExtraId = sElementExtra.attr('data-id');
        var dataPrev = $('.preview-chain-val[data-target="' + sTarget + '"]');
        var dataPrevExtra = $('.preview-chain-val[data-target="' + sElementExtraId + '"]');
        sElement.addClass('active');
        sElementExtra.addClass('active');
        if (colorGet != null) {
            sElement.attr('data-color', colorGet);
            sElementExtra.attr('data-color', colorGet);
            dataPrev.html(colorGet).val(colorGet);
            dataPrevExtra.html(colorGet).val(colorGet);
        }
        localStorage.removeItem('all');
    });

    $('.help').each(function () {
        var elementId = $(this).attr('data-target');
        var element = $('[data-id="' + elementId + '"]');
        var elementExtra = $('[data-extra="' + elementId + '"]');
        var elementExtraId = elementExtra.attr('data-id');
        var dataPrev = $('.preview-chain-val[data-target="' + elementId + '"]');
        var dataPrevExtra = $('.preview-chain-val[data-target="' + elementExtraId + '"]');
        $(this).on('mouseover', function () {
            element.addClass('hover');
            elementExtra.addClass('hover');
        }).on('mouseleave', function () {
            element.removeClass('hover');
            elementExtra.removeClass('hover');
        }).on('click', function () {
            $('.constructor-item-element').removeClass('active');
            element.addClass('active');
            elementExtra.addClass('active');
            var colorGet = localStorage.getItem('color');
            if (colorGet != null) {
                element.attr('data-color', colorGet);
                elementExtra.attr('data-color', colorGet);
                dataPrev.html(colorGet).val(colorGet);
                dataPrevExtra.html(colorGet).val(colorGet);
            }
            localStorage.removeItem('all');
        });
    });

    $('.pinstripes.pb-item').on('click', function () {
        var idExtra = $(this).attr('data-id-extra');
        $('.pb-item[data-id-extra="' + idExtra +'"]').each(function () {
            if($(this).hasClass('active')){
                if($(this).hasClass('siblings')){
                    $(this).addClass('ready').siblings('.siblings').addClass('ready').siblings('.pinstripes:not(.siblings)').removeClass('ready');
                }else{
                    $(this).addClass('ready').siblings('.pinstripes').removeClass('ready');
                }
            }
        });
    });

    $('.pick-item button:not(.disabled)').on('click', function () {
        if(!$('body').hasClass('bap-color')){
            var color = $(this).attr('data-color');
            var colorSet = localStorage.setItem('color', color);
            $('.constructor-item-element.active').attr('data-color', color).each(function(){
                var dataPrevId = $(this).attr('data-id');
                $('.preview-chain-val[data-target="' + dataPrevId + '"]').html(color).val(color);
            });
            var allGet = localStorage.getItem('all');
            if (allGet != null) {
                $('.preview-chain-val.color').html(color).val(color);
            }
            $('.logo-list.ready .logo-element').attr('data-color', color);
            if(typeof color != 'undefined'){
                $('.preview-chain-val-logo.ready b').text(' - ' + color);
                $('.preview-chain-val-logo.ready.logo-color').val(color);
            }
        }
    });

    $('.form-block-check .pick-item button').on('click', function () {
       $(this).closest('.pick-block-cont') .removeClass('visible');
    });

    $('.constructor-panel-block textarea').on('input', function () {
        var customValue = $(this).val();
        if(!$('.constructor.active .constructor-item-in.active').hasClass('constructor-item-in-back')){
            var activeElement = $('.constructor.active .constructor-item-in.active > .active');
        }else{
            var activeElement = $('.logo-area.active');
        }
        activeElement.attr('data-custom-text', customValue);
    });

    $('.constructor-panel-block .upload').on('input', function () {
        var customValue = $(this).val();
    });

    $('.constructor-schematics-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest('.constructor').find('.constructor-item-in.active').toggleClass('with-scheme');
    });

    $('.apply-all button').on('click', function () {
        if(!$('body').hasClass('bap-color') && !$('body').hasClass('with-logos')){
            $('.constructor-item-element').each(function () {
                var target = $(this).attr('data-id');
                $('.constructor-item-element[data-id="' + target + '"]').addClass('active');
                var colorGet = localStorage.getItem('color');
                if (colorGet != null) {
                    $('.constructor-item-element').attr('data-color', colorGet);
                    $('.preview-chain-val.color').html(colorGet).val(colorGet);
                }
                localStorage.clear();
            });
        }else if ($('body').hasClass('bap-color')){
            $('.pb-item').addClass('active ready');
        }else if ($('body').hasClass('with-logos')){
            $('.logo-list').addClass('active ready');
            $('.preview-chain-val-logo').addClass('active ready');
        }
        var allSet = localStorage.setItem('all', 'all');
    });

    $('.clear button').on('click', function () {
        if(!$('body').hasClass('bap-color')){
            $('.constructor-item-element').removeClass('active').attr('data-color', '');
            $('.preview-chain-val.color').html('Null').val('Null');
        }else{
            $('.pb-item').removeClass('active ready').attr('data-color', '');
            $('.pb-switch button').removeClass('active');
            $('.preview-chain-val.bp').html('Null').val('Null');
        }
    });

    $('.content-center-panel-in.main .btn').on('click', function () {
        $('body').removeClass('first').addClass('second');
        $('.tabs-nav-item:first-child button').addClass('active');
        $('.constructor.cont').addClass('active');
    });

    function rotateDisabled() {
        if (!$('.constructor.active .constructor-item-in.active [data-id=left], .constructor.active .constructor-item-in.active [data-id=right]').length) {
            $('.constructor-rotate .left, .constructor-rotate .right').addClass('disabled');
        } else {
            $('.constructor-rotate .left').trigger('click');
        }
    }

    $('.tabs-nav-item button').on('click', function () {
        rotateDisabled();
        $('.logo-list').removeClass('ready');
        $('.preview-chain-val-logo').removeClass('ready');
        $('.constructor-item-element').removeClass('active');
        var target = $(this).attr('data-target');
        $('[data-id="' + target + '"]').addClass('active').siblings().removeClass('active');


        if ($(this).hasClass('tabs-nav-item-harness')) {
            $('body').addClass('with-harness');
        } else {
            $('body').removeClass('with-harness');
        }

        if ($(this).hasClass('logos')) {
            $('body').addClass('with-logos');
            localStorage.removeItem('color');
        } else {
            $('body').removeClass('with-logos');
        }


        if ($(this).hasClass('bap')) {
            $('body').addClass('bap-color');
            $('.pick-block-cont.neon .with-disabled').removeClass('disabled');

            $('.bap-color .pick-item button').on('click', function () {

                var bap = $(this).attr('data-color');
                var color = $(this).attr('data-color');
                var colorSet = localStorage.setItem('color', color);
                $('.pb-item.ready').each(function () {
                    $(this).attr('data-color', bap);
                   if($(this).hasClass('pinstripes')){
                       var idExtra = $(this).attr('data-id-extra');
                       $('.preview-chain-val[data-target-extra="' + idExtra +'"]').html(color).val(color);
                   }else{
                       $('.preview-chain-val[data-target=binding]').html(color).val(color);
                   }
                });
                var allGet = localStorage.getItem('all');
                if (allGet != null) {
                    $('.preview-chain-val.bp').html(color).val(color);
                }

            });
        } else {
            $('body').removeClass('bap-color');
            $('.pick-block-cont.neon .with-disabled').addClass('disabled');
        }

        if ($('body').hasClass('first')) {
            $('body').removeClass('first').addClass('second');
            $('.constructor.cont').addClass('active');
        }

        if ($(this).hasClass('options')) {
            $('.side-panel.calc').addClass('active');
            $('.continue.first').removeClass('active');
            $('.continue.second').addClass('active');
        } else {
            $('.continue.first').addClass('active');
            $('.continue.second').removeClass('active');
        }
        if (!$(this).hasClass('back')) {
            $(this).addClass('active').parent().siblings().find('button').removeClass('active');
        } else {
            $('body').removeClass('with-form').addClass('second');
            $('.tabs-nav-item .info, .tabs-nav-item-cont').trigger('click');
        }

        $('.form-side-item:first-child button').trigger('click');
        $('.btn.preview').hide();
        $('body').removeClass('with-preview');
        $('.modal-close').trigger('click');
        localStorage.clear();
        $('.pb-switch button.active').trigger('click');
    });

    $('.constructor-tabs-nav-item button').on('click', function () {
        var target = $(this).attr('data-target');
        $(this).addClass('active').parent().siblings().find('button').removeClass('active');
        $('.constructor.active .constructor-item-in[data-id="' + target + '"]').addClass('active').siblings().removeClass('active');
        $('.constructor-schematics[data-id="' + target + '"]').addClass('active').siblings('.constructor-schematics').removeClass('active');
        $('.logos .pick-item button').removeClass('active');
        $('.constructor-panel-block').removeClass('active');
        $('.logo-list').removeClass('ready');
        $('.preview-chain-val-logo').removeClass('ready');
        $('.side-panel.logos .pick-item button').removeClass('checked');
        localStorage.removeItem('logo');
        rotateDisabled();
        if($(this).closest('.constructor').hasClass('logos')){
            if(target === 'front3'){
                $('.custom-text.custom-text').removeClass('disabled');
            }else{

                $('.custom-text.custom-text').addClass('disabled');
            }
        }
    });

    $('.constructor-rotate button').on('click', function () {
        var target = $(this).attr('data-target');
        $(this).addClass('disabled').siblings().removeClass('disabled');
        $('.constructor.active .constructor-item-in.active > div[data-id="' + target + '"]').addClass('active').siblings().removeClass('active');
        $('.logos .pick-item button').removeClass('active');
        $('.constructor-panel-block').removeClass('active');
    });

    $('.order-form').on('click', function () {
        $('body').removeClass('second').addClass('with-form');
    });

    $('.form-side-item button').on('click', function () {
        $(this).addClass('active').removeClass('done').parent().siblings().find('button').removeClass('active');
        $(this).parent().prevAll().find('button').addClass('done');
        $(this).parent().nextAll().find('button').removeClass('done');
        var target = $(this).attr('data-target');
        $('[data-id="' + target + '"]').addClass('active').siblings().removeClass('active');
        if ($(this).parent().is(':last-child')) {
            $('.continue.second').removeClass('active');
            $('.btn.preview').show();
        }
    });

    $('.continue.first').on('click', function () {
        $('.tabs-nav-list-form .tabs-nav-item button.active').parent().next(':not(:last-child)').find('button').trigger('click');
    });

    $('.continue.second').on('click', function () {
        $('.form-side-item button.active').parent().next().find('button').trigger('click');
    });

    $('.preview, .btn.preview').on('click', function () {
        $('body').removeClass('second').addClass('with-form with-preview');
    });

    $('.btn-open').on('click', function () {
        if ($(this).hasClass('left')) {
            $('.side-left').addClass('open');
            $('.modal-back').addClass('open');
        } else {
            $('.side-right').addClass('open');
            if ($('body').hasClass('first')) {
                $('body').removeClass('first').addClass('second');
                $('.constructor.cont').addClass('active');
            }
        }
    });

    $('.modal-close, .modal-back').on('click', function () {
        $('.side-left, .side-right').removeClass('open');
        $('.modal-back').removeClass('open');
    });

    $('.form-block-item').on('keyup', function () {
        var target = $(this).attr('data-val');
        var val = $(this).val();
        $('[data-target="' + target + '"]').html(val).val(val);
    });

    $('select').on('change', function () {
        var target = $(this).attr('data-val');
        var val = $(this).find('option:selected').text();
        $('[data-target="' + target + '"]').html(val).val(val);
    });

    $('.form-block-checks').each(function () {
        var targetCheck = $(this).attr('data-val');
        $(this).find('input').on('click', function () {
            if($(this).siblings().hasClass('pick-block-cont')){
                $(this).siblings('.pick-block-cont').addClass('visible').find('.pick-item button').on('click', function () {
                    var color = $(this).attr('data-color');
                    if($(this).closest('.form-block-check').hasClass('dif')){
                        var targetCheckColor = $(this).closest('.form-block-check').attr('data-val');
                        $('[data-target="' + targetCheckColor + '"]').html(color).val(color);
                    }else{
                        $('[data-target="' + targetCheck + '"]').html(color).val(color);
                    }
                    $(this).closest('.pick-block-cont').siblings('label').find('b span').html(color);
                    if(color == 'Def'){
                        $('[data-target="' + targetCheckColor + '"]').html('').val('');
                        $(this).closest('.pick-block-cont').siblings('label').find('b span').html('');
                        $(this).closest('.form-block-check').find('input').prop('checked', false);
                    }
                });
            }else{
                $(this).closest('.form-block-chain').find('.pick-block-cont').removeClass('visible');
                var targetVal = $(this).siblings('label').find('span').text();
                var targetStandart = $(this).siblings('label').find('b').text();
                $('[data-target="' + targetCheck + '"]').html(targetVal).val(targetVal);
                $(this).closest('.form-block-check').siblings('.dif').each(function () {
                    var targetCheckColor = $(this).attr('data-val');
                    $('[data-target="' + targetCheckColor + '"]').html('').val('');
                    $(this).find('label').find('b span').html('');
                    $(this).find('input').prop('checked', false);
                });
                if(targetStandart == 'Standart'){
                    $(this).closest('.form-block-check').siblings('.dif').each(function(){
                        $(this).addClass('disabled');
                    });
                }else{
                    $(this).closest('.form-block-check').siblings('.dif').removeClass('disabled');
                }

                if($(this).hasClass('val-check')){
                    if($(this).is(':checked')){
                        $('[data-target="' + targetCheck + '"]').html('').addClass('checked').val('yes');
                    }else{
                        $('[data-target="' + targetCheck + '"]').html('').removeClass('checked').val('');
                    }
                }
            }
        });
    });

    $('.modal-open').on('click', function (e) {
        e.preventDefault();
       var target = $(this).attr('data-target');
       $('[data-id="' + target + '"]').addClass('open');
    });

    $('.modal-custom-close, .modal-shadow').on('click', function () {
       $(this).closest('.modal-custom').removeClass('open');
    });

    $('.dealer-current').on('click', function () {
       $('.dealer-choose').toggleClass('open');
    });

    $('.dealer-country').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        var target = $(this).attr('data-target');
        var country = $(this).html();
        $('.dealer-current').html(country);
        $('.dealer-choose').removeClass('open');
        $('.dealer-item[data-id="' + target + '"]').addClass('active').siblings().removeClass('active');
    });

    $('.pb-switch button').on('click', function () {
       $(this).toggleClass('active').siblings().removeClass('active');
        $('.pb-item').removeClass('active ready');
        var target = $('.pb-switch button.active').attr('data-target');
        $('.pb-item[data-id="' + target + '"]').addClass('active ready').siblings('*:not([data-id="' + target +'"])').removeClass('active ready');
    });

    $('.logo-list').on('click', function () {
        var logoGet = localStorage.getItem('logo');
        var logoArea = $(this).attr('data-logo-area');
        $('.logo-list[data-logo-area="' + logoArea + '"]').addClass('active ready').siblings().removeClass('ready').closest('.constructor-item-img').parent().siblings().find('.logo-list').removeClass('ready');
        $('div.preview-chain-val-logo[data-logo-val="' + logoArea + '"]').addClass('active ready').closest('.preview-chain').siblings().find('.preview-chain-val-logo').removeClass('ready');
        $('input.preview-chain-val-logo[data-logo-val="' + logoArea + '"]').addClass('active ready').siblings('.preview-chain-val-logo').removeClass('ready');
        $('input.preview-chain-val-logo[data-logo-val="' + logoArea + '"]').addClass('active ready');
        var logoActive = $(this).find('.logo-element.active').attr('data-id');
        if (logoGet != null) {
            $('.logo-list[data-logo-area="' + logoArea + '"]').find('.logo-element[data-id="' + logoGet +'"]').addClass('active').siblings().removeClass('active');
            $('.preview-chain-val-logo[data-logo-val="' + logoArea + '"]').find('span').text(logoGet);
            $('.preview-chain-val-logo.logo-type[data-logo-val="' + logoArea +'"]').val(logoGet);
        }
        $('.side-panel.logos .pick-item button[data-val="' + logoActive + '"]').addClass('checked').parent().siblings().find('button').removeClass('checked');
        var colorGet = localStorage.getItem('color');
        if (colorGet != null) {
            $('.logo-list[data-logo-area="' + logoArea + '"]').find('.logo-element').attr('data-color', colorGet);
            if(colorGet != 'undefined'){
                $('.preview-chain-val-logo[data-logo-val="' + logoArea + '"]').find('b').text(' - ' + colorGet);
                $('.preview-chain-val-logo.logo-color[data-logo-val="' + logoArea + '"]').val(colorGet);
            }
        }
        if(!$(this).hasClass('front-center')){
            $('.pick-item button[data-val="custom_text"]').addClass('disabled').removeClass('checked');
            $('.constructor-panel-block[data-id="custom_text"]').removeClass('active');
        }else{
            $('.pick-item button[data-val="custom_text"]').removeClass('disabled');
            if($('.logo-text').hasClass('active')){
                $('.constructor-panel-block[data-id="custom_text"]').addClass('active');
            }
        }
    });

    $('.side-panel.logos .pick-item button').on('click', function () {
        $(this).toggleClass('checked').parent().siblings().find('button').removeClass('checked');
        var logoPick = $(this).attr('data-val');
        $('.logo-list.ready .logo-element[data-id="' + logoPick +'"]').addClass('active').siblings().removeClass('active');
        $('.preview-chain-val-logo.ready span').text(logoPick);
        $('.preview-chain-val-logo.ready.logo-type').val(logoPick);
        var logoSet = localStorage.setItem('logo', logoPick);
        if(!$(this).hasClass('checked')){
            $('.logo-list.ready .logo-element[data-id="' + logoPick +'"]').removeClass('active');
            $('.preview-chain-val-logo.ready').find('span, b').text('');
            $('.preview-chain-val-logo.ready.logo-type, .preview-chain-val-logo.ready.logo-color').val('');
        }
        if($(this).hasClass('custom') && $(this).hasClass('checked')){
            $('.constructor-panel-block[data-id="' + logoPick +'"]').addClass('active').siblings().removeClass('active');
            var customTextVal = $('.constructor-panel-block textarea').val();
            $('.logo-text').text(customTextVal);
            $('.logo-val-text').val(customTextVal).attr('placeholder', customTextVal);
        }else{
            $('.constructor-panel-block').removeClass('active');
        }
        if(!$(this).hasClass('custom-text') && !$(this).hasClass('checked')){
            $('.logo-val-text').val('').attr('placeholder', '');
            $('.logo-text').text('');
        }

        if($(this).hasClass('custom-text')){
            $('[data-logo-area="2"]').trigger('click');
        }

    });

    $('.constructor-panel-block textarea').on('input', function () {
        var customText = $(this).val();
        $('.logo-text').text(customText);
        $('.logo-val-text').val(customText).attr('placeholder', customText);
    });


    var testVal;
    $('.form-block-chain label').on('click', function (e) {
        var chainTitle = $(this).closest('.form-block-chain').find('.form-block-label').text();
        var checkTitle = $(this).children('span').text();
        var checkVal = $(this).find('b');
        var checkValClone = checkVal.clone();
        checkValClone.find('span').remove();
        var checkValText = checkValClone.text();
        var checkValNum = checkValText.replace('$', '');
        var calItemId = $(this).closest('.form-block-checks').attr('data-val');
        var chainDif = $(this).closest('.form-block-check').hasClass('dif');
        var chainSum = $(this).closest('.form-block-check').hasClass('no-sum');

        if(!$('.side-panel.calc .calc-block[data-name="' + calItemId +'"]').length){
            $('.side-panel.calc .side-panel-cont').append('' +
                '<div class="calc-block" data-name="' + calItemId + '">' +
                '<div class="calc-block-title">' +
                '<span>' + chainTitle +'</span>' +
                ' - ' +
                '<b>' + checkTitle + '</b>' +
                '</div>' +
                '<div class="calc-block-val">' +
                checkValNum +
                '</div>' +
                '</div>' +
                '');
        }
        $('.side-panel.calc .calc-block').each(function () {

            if($(this).find('.calc-block-title span').text() === chainTitle && chainDif === false){
                $(this).find('.calc-block-title b').text(checkTitle);
                $(this).find('.calc-block-val').removeClass('sum').text(checkValNum);
            }else if($(this).find('.calc-block-title span').text() === chainTitle && chainDif === true && chainSum === false){
                $(this).find('.calc-block-val').each(function () {
                    if(!$(this).hasClass('sum')){
                        $(this).text(parseInt($(this).text()) + 25);
                        $(this).addClass('sum');
                    }
                });
            }

            if($(this).find('.calc-block-val').text() === 'Standart'||$(this).find('.calc-block-val').text() === 'Free'|| $(this).find('.calc-block-val').text() === ''){
                $(this).remove();
            }

            $(".side-panel.calc .side-panel-footer div:last-child").html(function() {
                var a = 0;
                $('.calc-block-val').each(function() {
                    a += parseInt($(this).text());
                });
                return a;
            });

        });

        e.stopPropagation();
        $(this).siblings('.pick-block-cont').find('.pick-item button').one('click', function (e) {
            if($(this).hasClass('Def')){
                $('.side-panel.calc .calc-block').each(function () {

                    if($(this).find('.calc-block-title span').text() === chainTitle && chainDif === true && chainSum === false){
                        $(this).find('.calc-block-val').each(function () {
                            if($(this).hasClass('sum')){
                                $(this).text(parseInt($(this).text()) - 25);
                                $(this).removeClass('sum');
                            }
                        });
                    }else if($(this).find('.calc-block-title span').text() === chainTitle && chainDif === true && chainSum === true){
                        $(this).remove();
                    }else if($(this).find('.calc-block-title span').text() === chainTitle && chainDif === false && chainSum === false){
                        $(this).remove();
                    }

                    $(".side-panel.calc .side-panel-footer div:last-child").html(function() {
                        var a = 0;
                        $('.calc-block-val').each(function() {
                            a += parseInt($(this).text());
                        });
                        return a;
                    });

                });
            }
        });

    });

    $('.btn.order').on('click', function () {
        $('.preview-chain-val').each(function () {
            if($(this).is(':empty') || $(this).text() === 'Null'){
                if(!$(this).hasClass('not-required')){
                    $(this).closest('.preview-chain').addClass('error');
                    $('.form-alert').addClass('active');
                }
            }else{
                $(this).closest('.preview-chain').removeClass('error');
            }

        });
        if(!$('.preview-chain.error').length){
            $('.form-alert').removeClass('active');
            $('.form-constructor button').trigger('click');
        }
    });

    $('.content-center-panel-buttons-s .save, .content-center-panel-buttons .save').on('click', function() { //Change
        var th = $('.form-constructor');
        $.ajax({
            type: "POST",
            url: "save.php", //Change
            data: th.serialize()
        }).done(function(data) {
            var modal = $('[data-id="modal-save"]');

            modal.find('.text_id').text(data.id)
            modal.addClass('open');
        });
        return false;
    });

    $('form.code').submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "get.php", //Change
            data: th.serialize()
        }).done(function(data) {
            $.each(data, function(index, element){
                var input = $('.form-constructor').find('input[name="'+index.replace(/\_/g, ' ')+'"]');
                var target = input.data('target');
                var targetLogo = input.data('logo-val');
                if(input.hasClass('logo-type')){
                    var targetLogoType = element;
                }
                if(input.hasClass('logo-color')){
                    var targetLogoColor = element;
                }
                if(input.hasClass('with-color')){
                    var targetWithColor = element;
                }

                input.val(element);
                var block = $('[data-val="'+target+'"]');

                if(block.is('input') || $('[data-val="'+target+'"]').is('textarea')){
                    block.val(element);
                } else if($('[data-val="'+target+'"]').is('div')){
                    if(element != ""){
                        block.find('.form-block-check span').each(function () {
                            var elementText = $(this).text();
                            if(elementText === element){
                                $(this).closest('label').trigger('click');
                            }
                        });
                        if(element == "yes"){
                            $('[data-val="'+target+'"] label').trigger('click');
                            $('[data-target="'+target+'"]').addClass('checked');
                        }
                        if(targetWithColor != 'undefined'){
                            $('[data-val="'+target+'"] .pick-item button[data-color=' + targetWithColor + ']').trigger('click').closest('.form-block-check').find('label').trigger('click');
                        }
                    }
                } else if($('[data-val="'+target+'"]').is('select')){
                    if(element != ""){
                        block.siblings('.custom-select').find("button:contains('"+element+"')").trigger('click');
                        block.val(element.toLowerCase());
                    }
                }

                $('.preview-chain-val[data-target="' + target +'"]').each(function () {
                    if(element != "" && element != 'Null'){
                        $(this).html(element);

                        $('svg[data-id='+ target +']').attr('data-color', element);
                    }
                });


                $('.preview-chain-val[data-logo-val="' + targetLogo +'"]').each(function () {
                    if(element != ""){
                        $(this).addClass('active');
                    }
                    $(this).find('span').html(targetLogoType);
                    $(this).find('b').html('- ' + targetLogoColor);
                });
                $('.logo-list[data-logo-area="' + targetLogo +'"]').each(function(){
                    if(element != ""){
                        $(this).addClass('active');
                    }
                    $(this).find('[data-id="'+ targetLogoType +'"]').addClass('active');
                    $(this).find('.logo-element.active').attr('data-color', targetLogoColor);
                    var logoTextVal = $('.logo-val-text').val();
                    if(logoTextVal != ''){
                        $('.logo-element.logo-text').text(logoTextVal);
                        $('.constructor-panel-block textarea').val(logoTextVal);
                    }
                });

            });
            $('.modal-success').addClass('open');
        });
        return false;
    });

    $('.form-constructor').submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "constructor.php", //Change
            data: th.serialize()
        }).done(function() {
            $('[data-id="modal-thanks"]').addClass('open');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $('.form-contact').submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "contact.php", //Change
            data: th.serialize()
        }).done(function() {
            $('[data-id="modal-contacts"]').removeClass('open');
            $('[data-id="modal-thanks"]').addClass('open');
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

    $('.dealers-item').append('<button type="button" class="dealers-item-choose">choose a dealer</button>');

    $('.form-block-button').on('click', function () {
        $('[data-target="modal-dealer"]').trigger('click');
    });

    $('.dealers-item-choose').on('click', function () {
        var dealerInfo = $(this).siblings('.dealers-cont').children('div:first-child').text();
        var dealerInput = $('.form-block-button').siblings('input');
        var dealerInputId = $('.form-block-button').siblings('input').attr('data-val');
        dealerInput.val(dealerInfo).attr('placeholder', dealerInfo);
        $('[data-target="' + dealerInputId + '"]').html(dealerInfo).val(dealerInfo);
        $('.modal-custom').removeClass('open');
    });

    $('.code-wrap button').on('click', function () {
        var copyTarget = $(this).attr('data-target');
        select_all_and_copy(document.getElementById(copyTarget));
        $('.code-wrap button').addClass('disabled');
        $('.copy-alert').addClass('active');
        setTimeout(function () {
            $('.copy-alert').removeClass('active').addClass('fade');
        }, 500);
        setTimeout(function () {
            $('.copy-alert').removeClass('fade');
            $('.code-wrap button').removeClass('disabled');
        }, 1000);
    });

    $('.code-wrap b').on('click', function () {
        $('.code-wrap button').trigger('click');
    });

    $('.constructor[data-id=cons3]').each(function () {
       $(this).find('[data-target="front2"]').on('click', function () {
            $('.constructor[data-id=cons3] .constructor-schematics').addClass('active');
            $('.pb-switch').show();
       });
       $(this).find('[data-target="back3"]').on('click', function () {
           $('.constructor[data-id=cons3] .constructor-schematics').removeClass('active');
           $('.pb-switch').hide();
       });
    });

});
