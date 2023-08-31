async function checkTokensAreLocked(userAddress) {
    // Fetch user's stakes and their relevant data
    const userStakes = await fetchUserStakes(userAddress);

    // Perform the lock check
    const currentBlock = await web3.eth.getBlockNumber();
    for (const stake of userStakes) {
        const endBlock = stake.startBlock + (BLOCKS_PER_DAY * 14);
        if (currentBlock < endBlock) {
            throw new Error("Tokens are locked!");
        }
    }
}

async function stake(userAddress, tokenAmount) {
    try {
        // Check if tokens are locked
        await checkTokensAreLocked(userAddress);

        // Proceed with the staking process using userAddress and tokenAmount
        // ...
    } catch (error) {
        console.error('Staking error:', error);
    }
}


const userAddress = '0xYourUserAddress';
const tokenAmount = '1000000000000000000';
stake(userAddress, tokenAmount);
