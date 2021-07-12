// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract Pausable {
    bool private _paused;

    event Paused(address account);
    event UnPaused(address account);

    constructor() {
        _paused = false;
    }

    function _pause() internal virtual {
        _paused = true;
        emit Paused(msg.sender);
    } 

    function _unpause() internal virtual {
        _paused = false;
        emit UnPaused(msg.sender);
    }

    function paused() public view virtual returns(bool) {
        return _paused;
    }

    modifier whenPaused() {
        require(paused(), "Pausable::Contract is not paused!");
        _;
    }

    modifier whenNotPaused() {
        require(!paused(), "Pausable::Contract is already paused!");
        _;
    }
}