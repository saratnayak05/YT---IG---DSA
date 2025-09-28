

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