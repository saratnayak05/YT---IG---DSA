

//Brute-Force Approch
//T.C - O(n^2)   S.C - O(1)
var twoSum = function(nums, target) {
     
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] +nums[j] === target){
                return [i,j];
            }
        }
    }

}


//Better Approch (Two Pointer Technique)
//T.C - O(nlogn)  sort method take O(nlogn) loop took O(n)
//S.C - O(n)  because we use extra array

var twoSum = function(nums, target) {

        let arr=nums.map((num,i)=>[num,i]);
          arr.sort((a,b)=>a[0]-b[0]);

          let l=0 ; let r=arr.length-1;

          while(l<r){
            let sum=arr[l][0] + arr[r][0];
            if(sum === target) return [arr[l][1],arr[r][1]];

            sum < target ? l++:r--;
        }  
    }

   
    
//Using HashMap Approch-------------------------------------------------------
    //T.C - O(n)  it looping over array once and searching T.C of Map O(1)
    //S.C - O(n)  because we use extra space Map

var twoSum = function(nums, target) {

    let numsMap = new Map();
      for(let i=0; i<nums.length; i++){
        let dif = target - nums[i];
        if(numsMap.has(dif)){
            return [numsMap.get(dif),i];
        }else{
            numsMap.set(nums[i],i)
        }
    }
    
}
