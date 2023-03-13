// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "./product.sol";
import "./order.sol";
import "./customer.sol";
import "./distributor.sol";
contract Farmer is Product,Distributor{
    uint public farmer_count;
    //event farmerDetails(uint[] memory _products, address _customerAddress,address _farmerAddress);
    struct farmer{
        uint farmer_id;
        string farmer_name;
        address farmer_add;
        address distributor_add;
        uint rating;
        string farmer_location;
        string farmer_phone;
        string farmer_email;
        uint256[] farmer_product;
        bool isLoggedIn;
    }

    //struct farmer_network;
    address[] public farmerAddresses;
    //mapping for all products of farmer using it's address
    //mapping(address=>product[]) farmers_products_map;
    mapping(address=>farmer) public farmer_map;
    //mapping(uint => farmer) public farmer_id_map;
    //event farmerDetails()
    // constructor(){
    //     farmer storage f= farmer_map[msg.sender];
    //     f.farmer_add=msg.sender;
    // }

    //OK
    function setFarmerDetails(string memory _name,string memory _location,string memory _phone,string memory _email) public{
        farmer storage f= farmer_map[msg.sender];
        f.farmer_add=msg.sender;
        if(f.farmer_id==0)
        {
            farmer_count++;
            f.farmer_id=farmer_count;
            farmerAddresses.push(msg.sender);
            //farmer_id_map[f.farmer_id]=msg.sender;
        }
        f.farmer_email=_email;
        f.farmer_phone=_phone;
        f.farmer_name=_name;
        f.farmer_location=_location;
        //f.farmer_product.push(0);
        f.isLoggedIn=true;
        //farmer_id_map[f.farmer_id]=f;
    }
    //OK
    function checkStatusFarmer(address _address) public returns(bool){
        return farmer_map[_address].isLoggedIn;
    }

    function logOutFarmer() public{
        farmer storage f= farmer_map[msg.sender];
        f.isLoggedIn=false;
    }

    function logInFarmer() public{
        farmer storage f= farmer_map[msg.sender];
        f.isLoggedIn=true;
    }
    function setDistributor(address payable _distributorAddress) public
    {
        farmer storage f= farmer_map[msg.sender];
        f.distributor_add=_distributorAddress;
    }
        // function placeOrder(address _to) public
        //OK
    function createProduct(string memory _name,uint _price,string memory _category,uint _amount) public{
           product storage p=product_map[pid];
            if(p.product_id==0)
            {
                pid++;
                p.product_id=pid;
            }
            p.product_name=_name;
            p.product_amount=_amount;
            p.product_price=_price;
            p.owner=msg.sender;
            p.product_category=_category;
            farmer_map[msg.sender].farmer_product.push(pid);
    }
    //OK
    function viewProductsFarmer(address _address) public view returns (uint256[] memory)
    {
       // emit farmerDetails(farmer_map[msg.sender].farmer_product);
        return farmer_map[_address].farmer_product;
    }

    function processOrder(uint[] memory _products, address _customerAddress,address _farmerAddress) public{
            order_count++;
            farmer storage f=farmer_map[_farmerAddress];
            order storage o = order_map[order_count];
            o.order_id=order_count;
            //o.order_price = order_price_map[_customerAddress]; 
            o.customer_address=_customerAddress;
            o.farmer_address=_farmerAddress;
            o.product_items=_products;
            distributor storage d=distributor_map[f.distributor_add];
            d.orders.push()=o;
    }
}