import Swal from "sweetalert2";
import axios from "axios";

export function showAlert(aTitle, aIcon, aFocus=''){
    if (aFocus!='') {
        document.getElementById(aFocus).focus();
    }
    Swal.fire({
        title:aTitle,
        icon:aIcon,
        customClass:{confirmButton:'btn btn-primary', popup:'animated zoonIn'},
        buttonsStyling:false
    })
}
export function confirmation(urlWithSlash, cId, cTitl, cMsg) {
    var url = urlWithSlash+cId;
    const swalWithBoostrapButton = Swal.mixin({
        customClass:{confirmButton:'btn btn-success me-3', cancelButton:'btn btn-danger'},
    });

    swalWithBoostrapButton.fire({
        title:cTitl,
        text:cMsg,
        icon:'question',
        showCancelButton:true,
        confirmButtonText:'<i class="fa-solid fa-check"></i> Yes, delete.',
        cancelButtonText:'<i class="fa-solid fa-ban"></i> Cancel.'
    }).then((res)=>{
        if (res.isConfirmed) {
            sendApplication('DELETE', {id:cId}, url,'Removed');
        } else {
            showAlert('Canceled', 'info');
			window.setTimeout(function(){
                window.location.href='/';
            }, 10000);
        }
    });
}

export function sendApplication(sMethod, sParams, sUrl, sMsg) {
    axios({method:sMethod, url:sUrl, data:sParams}).then(function(res){
        var state = res.status;
        if (state == 200) {
            showAlert(sMsg, 'success');
            window.setTimeout(function(){
                window.location.href='/';
            }, 1000);
        } else {
            showAlert('Could not get the answer', 'error');
        }
    }).catch(function(error){
        showAlert('Server not available', 'error');
    });
}