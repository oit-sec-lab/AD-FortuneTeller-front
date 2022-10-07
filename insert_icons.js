const EXTENSION_ID = chrome.runtime.id;
const IMG_PATH_TRUE = 'chrome-extension://' + EXTENSION_ID + '/images/ad_logo_true.jpg'
const IMG_PATH_FLASE = 'chrome-extension://' + EXTENSION_ID + '/images/ad_logo_false.jpg'
const IMG_TAG_TRUE = "<img src=" + IMG_PATH_TRUE + ">"
const IMG_TAG_FALSE = "<img src=" + IMG_PATH_FLASE + ">"
function insert_ad_icon(ad_result) {
    var index = 1;
    console.log(ad_result);
    $('.yuRUbf a').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            var match_array_bool = ad_result[index]['ad'];
            console.log("yuRUbf a");
            if(!match_array_bool){
                $(this).children("br").after(IMG_TAG_TRUE);
            }
            else{
                $(this).children("br").after(IMG_TAG_FALSE);
            }
            index++;
        }
    });
    $('.yuRUbf link').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            console.log(".yuRUbf link");
            var match_array_bool = ad_result[index]['ad'];
            if(!match_array_bool){
                $(this).children("br").after(IMG_TAG_TRUE);
            }
            else{
                $(this).children("br").after(IMG_TAG_FALSE);
            }
            index++;
        }
    });
    
    $('g-link link').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            console.log("g-link link");
            var match_array_bool = ad_result[index]['ad'];
            if(!match_array_bool){
                $(this).children("br").after(IMG_TAG_TRUE);
            }
            else{
                $(this).children("br").after(IMG_TAG_FALSE);
            }
            index++;
        }
    });
    
    $('g-link a').each(function() {
        var URL = $(this).prop('href');
        if (URL.indexOf('webcache') == -1 && URL.indexOf('www.google.com/search?') == -1) {
            console.log("g-link a");
            var match_array_bool = ad_result[index]['ad'];
            if(!match_array_bool){
                $(this).children("br").after(IMG_TAG_TRUE);
            }
            else{
                $(this).children("br").after(IMG_TAG_FALSE);
            }
            index++;
        }
    });
    
}