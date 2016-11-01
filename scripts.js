// function validateForm() {
//     var x = document.forms["ocst_form"]["ShipPhone"].value;
//     if (x == null || x == '') {
//         // alert("Shipping Phone number missing");
//         $("#fields-key").append("<b>Shipping Phone number missing</b>");
//         return false;
//     }

//     var y = document.forms["ocst_form"]["BillPhone"].value;
//     if (y == null || y == '') {
//         // alert("Billing Phone number missing");
//         $("#fields-key").append("<br><strong>Billing Phone number missing</strong>");
//         return false;
//     }

//     if(document.getElementById('agree').checked) { 
//         return true; 
//     } else { 
//         // alert('Please indicate that you have read and agree to the Terms and Conditions and Privacy Policy'); 
//         document.getElementById('terms-and-service').style.color = "red";
//         return false; 
//     }

// }

// $(".mini-bask-total .total").html(summaryTotal);
// $(".basket-count").html(summaryCount);
// $("#global-mini-basket-hover-content").html(miniBaskContents);

// $(document).ready(function() {
//     var siteURL = "http://dts3121.mivamerchantdev.com/mm5/merchant.mvc";
//     console.log(siteURL);
//     $("#multiple-add").on("submit", function() {
//       $("#multiple-add input[name='Product_Code']").each(function(index) {
//         if ($(this).val() != '') {
//           var qty = parseInt($("#multiple-add input[name='Quantity']").eq(index).val());
//           if (!isNaN(qty) && qty > 0) {
//             var parameters = {};
//             parameters["Action"] = "ADPR";
//             parameters["Product_code"] = $(this).val();
//             parameters["Quantity"] = qty;
//             $(".product-attributes:eq("+index+") input[name*='Product_Attributes[']").each(function(ind) {
//               parameters["Product_Attributes["+(ind+1)+"]:code"] = $(this).val();
//               parameters["Product_Attributes["+(ind+1)+"]:value"] = $(".product-attributes:eq("+index+") select[name*='Product_Attributes[']").eq(ind).val();
//             });
//             $.ajax({
//               'type': "POST",
//               'url': siteURL,
//               'data': parameters,
//               'async': false
//             });
//          }
//        }
//      });
//    });
// });