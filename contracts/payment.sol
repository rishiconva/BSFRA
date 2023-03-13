// SPDX-License-Identifier: GPL-3.0 
pragma solidity ^0.8.13;

contract Payment{
    address payable public buyer;
    address payable seller;
    uint public timeToExpire;
    uint public timeToReturn;
    uint public startTime;
    uint public receivedTime;
    uint public deposit;
    string public status;

    modifier onlySeller {
        require(msg.sender==seller);
        _;
    }

    modifier onlyBuyer {
        require(msg.sender==buyer);
        _;
    }

    function initiatePaymentContract(address payable _seller,uint _timeToExpire,uint _timeToReturn) public payable
    {
        buyer=payable(msg.sender);
        seller=_seller;
        timeToExpire=_timeToExpire;
        timeToReturn=_timeToReturn;
        startTime=block.timestamp;
        status="Payment Initiated";
        deposit=msg.value;
    }

    function itemShipped(string memory _status) onlySeller public{
        status=_status;
    }

    function itemReceived(string memory _status) onlyBuyer public
    {
        status=_status;
        receivedTime=block.timestamp;
        seller.transfer(deposit/5);
    }

    function releaseBalanceToSeller() onlyBuyer public{
        selfdestruct(seller);
    }

    function returnItemToSeller(string memory _status) onlyBuyer public{
        require(block.timestamp<receivedTime+timeToReturn,"Return Period Expire");
        status=_status;
    }

    function releaseBalanceToBuyer() onlySeller public{
        selfdestruct(buyer);
    }

    function withdraw() onlyBuyer public{
        require(block.timestamp>startTime+timeToExpire,"Cannot withdraw before delivery time");
        selfdestruct(buyer);
    }

    function cancel() onlySeller public{
        selfdestruct(buyer);
    }


}