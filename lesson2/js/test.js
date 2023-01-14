


///////////////////////////////////////////////// đảo chuỗi
/*
function reverse_arr(arr){
let len = arr.length;
let fr =[];
for(let i = 0; i < len; i++){
    fr[i] = arr[len- 1 -i]
}
return fr;
}


function reverse_string(str){
arr = [...str] ;   
arr = reverse_arr(arr);
return arr.reduce((value, item) => value + item , "") ;
}
*/
//////////////////////////////////////////////////// xóa các phần tử trùng nhau
if (1 == 0){
function dl_arr(arr_in){
let arr_resulf = [] ; 
dele_arr(arr_in);
function dele_arr(arr){

if (arr.length == 1) {

arr_resulf.push(arr[0]);
}
if (arr.length > 1) {  
    var check = 0;
   
    for(var i = 1 ; i < arr.length ; i++){
       if (arr[0] == arr[i]){
        check = 1;
       }
    }
   if (check == 0){
    arr_resulf.push(arr[0]);
   }
   arr.splice(0, 1);

   dele_arr(arr);


}

}
return arr_resulf ;
}

const mm = [1,2,1,4,2,5];

console.log(dl_arr(mm));
}
/////////////////////////////////////////////



    
const mm = [1,2,1,4,2,5,2,2,2,1,6,6,6,6];

function tanso_max(mm){
////
function dl_arr(arr_in){
    let arr_resulf = [] ; 
    let map_a = new Map();

    dele_arr(arr_in);
    function dele_arr(arr){
    
    if (arr.length > 1) {  
        var check = 0;
       
        for(var i = 1 ; i < arr.length ; i++){
           if (arr[0] == arr[i]){
       
            check = 1;
           }
        }
  
       if (check == 1){
       if (map_a.has(arr[0]) == false){ map_a.set(arr[0],1) };
       map_a.set(arr[0],map_a.get(arr[0]) + 1)
       }
       arr.splice(0, 1);
    
       dele_arr(arr);
    
    
    }
    
    }

    return map_a;
    }


////
    map_tanso = dl_arr(mm);
    let max_kq = -9999999999;
    let arr_max = [];
    map_tanso.forEach (function(value, key) {
        if (value > max_kq){
            max_kq =  value; 
            arr_max[0] = key;
        }
     
      })
      map_tanso.forEach (function(value, key) {
        if(max_kq == value && arr_max[0] != key ){
            arr_max.push(key);

        } 
      });
    ketqua = {};
    ketqua.value = arr_max; 
  
    if (arr_max.length > 1){
     console.log("có nhiều giá trị cùng đạt số lần xuất hiện lớn nhất")  ;
     
    }
    ketqua.count = max_kq;
    
    arr_max.forEach (function(item, index) {
      console.log("Value: " +String(item) + " , " + "count: " +String(max_kq))
    });

    return ketqua;
    }
    tanso_max(mm);












