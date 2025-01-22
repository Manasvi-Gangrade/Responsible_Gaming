//this file might not work as of know

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Game results ko store karne ka contract
contract GameResults {

    // Game result ka structure define karte hain
    struct GameResult {
        uint gameId;     // Game ka unique ID
        string result;   // Game ka result (win, loss, etc.)
    }

    // Mapping to store results by gameId
    mapping(uint => GameResult) public results;
    uint public resultCount = 0;  // Total number of results stored

    // Function to store a game result
    function storeGameResult(string memory _result) public {
        resultCount++;  // Result ka counter increment karte hain
        results[resultCount] = GameResult(resultCount, _result);  // Result store karte hain
    }

    // Function to get a game result by ID
    function getGameResult(uint _gameId) public view returns (string memory) {
        return results[_gameId].result;  // Specific game ka result return karte hain
    }
}
