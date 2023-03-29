// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8;

import "./farmer.sol";



contract Authority is Farmer{
address addressfarmer2;
string color;
string texture;
uint year;
string chemical_used;
string result1;

function setAddressfarmer2(address _addressfarmer2) external{

addressfarmer2 = _addressfarmer2;
} 

function call_get_crop_detail() external view returns (string memory, string memory, uint, string memory){

Farmer farmer = Farmer(addressfarmer2);
return farmer.get_crop_detail();

} 


function call_get_crop_detail() external returns (string memory){
Crop c=Crop_map[msg.sender];
Farmer farmer = Farmer(addressfarmer2);

(color, texture, year,chemical_used)=farmer.get_crop_detail();
if( keccak256(abi.encodePacked(color)) == keccak256(abi.encodePacked("black"))) {   // if else statement
         result1 = "";
      }


Crop storage crops=Crop_map[msg.sender];
      
return crops.color;


function call_get1_crop_detail() external returns (string memory){
return result1;

}

}
}