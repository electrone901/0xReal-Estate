//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "hardhat/console.sol";

contract Greeter {
    string private greeting;
    AggregatorV3Interface internal priceFeed;
    mapping(uint => priceTemplate) public priceList;
    uint public count =0;

    struct priceTemplate {
    uint id;
     string newPrice;
    address walletAddress;
  }
    event priceTemplateCreated (
    uint id,
    string newPrice,
    address walletAddress
  );

    constructor(string memory _greeting) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        priceFeed = AggregatorV3Interface(0x5498BB86BC934c8D34FDA08E81D444153d0D06aD); //AVAX
    }

     function newPrice( string memory _newPrice) external {
    count++;
    priceList[count] = priceTemplate(count, _newPrice, msg.sender);
    emit priceTemplateCreated(count, _newPrice, msg.sender);
  }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }

    function getLatestPrice() public view returns (int) {
        (
            /*uint80 roundID*/,
            int price,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
    }
}
