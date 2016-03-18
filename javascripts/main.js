
$(document).ready(function () {

    //向adviceDiv中添加留言和分割线。
    function addElement(contentStr) {
        var p = document.createElement('p');
        p.innerHTML = contentStr;//innerText非W3C标准
        $('#adviceDiv').append(p);
        var hr = document.createElement('hr');
        $('#adviceDiv').append(hr);
    }

    //点击提交意见后意见显示在留言板上
    $('#submitAdvice').click(function () {
        var adviceContent = $('#adviceArea').val();
        if (adviceContent) {
            addElement(adviceContent);
            document.getElementById('adviceArea').value = null;
        }
    });

    //body加载已有的评论
    $('body').ready(function () {
        var aj = $.ajax({
            url: 'javascripts/adviceData.txt',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                var advices = data.advice;
                for (var i = 0; i < advices.length; i++) {
                    addElement(advices[i]);
                }
            }
        });
    });

});


//function loadData() {
    
//    var xmlhttp;
//    var adviceDiv = document.getElementById('adviceDiv');

//    if (window.XMLHttpRequest) {
//        xmlhttp = new XMLHttpRequest();
//    } else {
//        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//    }
//    xmlhttp.open("GET", 'javascripts/adviceData.txt', true);
//    xmlhttp.send();

//    xmlhttp.onreadystatechange = function () {
//        if(xmlhttp.readyState==4 && xmlhttp.status==200){
//            var  oldDataObj = xmlhttp.responseText;
//            var jsonObj = JSON.parse(oldDataObj).advice;
//            console.log(jsonObj);
//            for (var i = 0; i < jsonObj.length;i++) {
//                addElement(jsonObj[i], adviceDiv);
//            }
//        }
//    }
//}