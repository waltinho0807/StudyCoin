// SPDX-License-Identifier: MIT

pragma solidity 0.7.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./Ownable.sol";
import "./ERC20.sol";

contract StudyCoin is Ownable, ERC20 {
    using SafeMath for uint;
    
    
    string public symbol = "FSC";
    string public  name = "Finance Study Coin";
    uint8 public decimals = 18;
    uint public amount_eth = 0;
    uint public _totalSupply = 10000 * 10 ** uint(decimals);
    uint internal _eth;
    uint public sellPrice;
    uint public buyprice = 50000000000000 wei;
    
    struct Sellers {
        address seller;
        uint tokens;
    }
    
    Sellers[] public listSell;
    
    
    mapping (address => uint) internal _balances;
    mapping (address => mapping (address => uint)) internal _allowed;
    mapping (address => uint) internal _etherBalances;
    
   
    
    event TokenSold(address seller, uint tokens, uint inWei);
    
    constructor()  {
         
        _balances[owner] = _totalSupply * 5/100;
        _balances[address(this)] = _totalSupply * 95/100;
        emit Transfer(address(0), owner, _totalSupply);
    }
    
    
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address tokenOwner) public view virtual override returns (uint) {
        return _balances[tokenOwner];
    }

    function transfer(address to, uint tokens) public virtual override returns (bool) {
        require(_balances[msg.sender] >= tokens);
        require(to != address(0));

        _balances[msg.sender] = _balances[msg.sender].sub(tokens);
        _balances[to] = _balances[to].add(tokens);

        emit Transfer(msg.sender, to, tokens);

        return true;
    }

    function approve(address spender, uint tokens) public virtual override returns (bool) {
        // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md#approve (see NOTE)
        if ((tokens != 0) && (_allowed[msg.sender][spender] != 0)) {
            revert();
        }

        _allowed[msg.sender][spender] = tokens;

        emit Approval(msg.sender, spender, tokens);

        return true;
    }

    function allowance(address tokenOwner, address spender) public view virtual override returns (uint256) {
        return _allowed[tokenOwner][spender];
    }

    function transferFrom(address from, address to, uint tokens) public virtual override returns (bool) {
        require(_balances[from] >= tokens);
        require(to != address(0));

        uint _allowance = _allowed[from][msg.sender];

        _balances[from] = _balances[from].sub(tokens);
        _balances[to] = _balances[to].add(tokens);
        _allowed[from][msg.sender] = _allowance.sub(tokens);

        emit Transfer(from, to, tokens);

        return true;
    }
    
      function buy() public payable {
        require(msg.value >= buyprice);
        require(_balances[address(this)] >= msg.value.div(buyprice) * 10 ** uint(decimals));
        
        amount_eth += msg.value;
        uint tokens = msg.value.div(buyprice) * 10 ** uint(decimals);
        _balances[msg.sender] += tokens;
        
        
        emit Transfer(address(this), msg.sender, tokens);
    }

    
        
     function addList (uint _tokens) public {
         require(_balances[msg.sender] >= _tokens);
         address _seller = msg.sender;
         _burn(_tokens);
         Sellers memory newSeller = Sellers({
           seller: _seller,
           tokens: _tokens
        });
        
        listSell.push(newSeller);
    }

    function completList () public view returns (Sellers[] memory) {
        return listSell;
    }
    
    

    function _burn(uint tokens) internal virtual {
        _balances[msg.sender] = _balances[msg.sender].sub(tokens);
        _totalSupply = _totalSupply.sub(tokens);
    }
    
     function withdraw(uint myAmount) onlyOwner public {
		require(address(this).balance >= myAmount, "Insufficient funds.");
		amount_eth -= myAmount;
		owner.transfer(myAmount);
	}
	
	function restart() onlyOwner public {
	    _totalSupply = 10000 * 10 ** uint(decimals);
	}
   
    function transferAnyERC20Token(address tokenAddress, uint tokens) public onlyOwner returns (bool success) {
        return ERC20(tokenAddress).transfer(owner, tokens);
    }
}