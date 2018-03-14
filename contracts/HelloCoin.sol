pragma solidity ^0.4.4;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract HelloCoin is StandardToken {
  string public name = "HelloCoin";
  string public symbol = "KH@";
  uint8 public decimals = 6;
  uint256 public INITIAL_SUPPLY = 888888888000000;

  function HelloCoin() public {
    // constructor
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
