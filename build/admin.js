(()=>{var e={861:()=>{jQuery((function(e){e(".meta_box_repeatable").on("click",".meta_box_upload_image_button",(t=>{var a,n,i,o,r;t.preventDefault(),a=e(t.target),o=(i=a).siblings(".meta_box_preview_image"),r=i.siblings(".meta_box_upload_image"),n?imageFrame.open():((n=wp.media({title:"Choose Image",multiple:!1,library:{type:"image"},button:{text:"Use This Image"}})).on("select",(function(){let e=n.state().get("selection").first().toJSON();e&&(o.css("display","block").attr("src",e.sizes.thumbnail.url),r.val(e.id))})),n.open())})),e(".form-row:not(:first) .meta_box_clear_image_button.button").css({display:"inline-block"}),e(".meta_box_repeatable").on("click",".meta_box_clear_image_button",(t=>{t.preventDefault(),e(t.target).closest("tr").remove()}))}))},757:()=>{jQuery((function(e){let t=e(".meta_box_repeatable_add"),a=e(".meta_box_default_image").html();t.on("click",(function(t){let n=e("table.meta_box_repeatable").find("tbody tr:last-child"),i=n.clone();i.find(".meta_box_upload_image").val(""),i.find(".meta_box_upload_image").val(""),i.find(".meta_box_preview_image").attr("src",a),i.find(".meta_box_clear_image_button.button").css({display:"inline-block"}),i.find(".meta_box_preview_audio").html(""),i.find(".meta_box_preview_length").html(""),i.find(".meta_box_upload_audio_file").val(""),i.find(".meta_box_clear_audio_button.button").css({display:"inline-block"}),i.find("select.chosen").removeAttr("style","").removeAttr("id","").removeClass("chzn-done").data("chosen",null).next().remove(),i.find("input.regular-text, textarea, select").val(""),i.find("input[type=checkbox], input[type=radio]").attr("checked",!1),n.after(i),i.find("input, textarea, select").attr("name",(function(e,t){return t.replace(/(\d+)/,(function(e,t){return Number(t)+1}))}));var o=[];return e("input.repeatable_id:text").each((function(){o.push(e(this).val())})),i.find("input.repeatable_id").val(Number(Math.max.apply(Math,o))+1),e.prototype.chosen&&i.find("select.chosen").chosen({allow_single_deselect:!0}),!1}))}))},760:()=>{jQuery((function(e){let t=document.getElementById("artistpress_show_artist"),a=document.getElementById("artistpress_show_artist_name"),n=document.getElementById("artistpress_show_venue"),i=document.getElementById("artistpress_show_venue_name");t&&a&&t.addEventListener("change",(e=>{let t=e.target,n=t.options[t.selectedIndex].getAttribute("data-name");a.value=n})),n&&i&&n.addEventListener("change",(e=>{let t=e.target,a=t.options[t.selectedIndex].getAttribute("data-name");i.value=a}))}))},960:()=>{jQuery((function(e){let t=e(".meta_box_repeatable tbody");t.length>0&&t.sortable({opacity:.9,cursor:"move",handle:".form-row",helper:function(t,a){let n=a.children(),i=a.clone();return i.children().each((function(t){e(this).width(n.eq(t).width())})),i},update:function(t,a){e(this).find("input").each((function(t,a){let n="";n="metabox_upload_audio_file"==e(a).attr("class")?`artistpress_songs[${t}][file_audio]`:`artistpress_images[${t}][image]`,e(a).attr("name",n)}))}})}))}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}(()=>{"use strict";a(960),a(757),a(760),a(861)})()})();