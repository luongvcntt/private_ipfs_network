import Web3 from "web3";
export default getWeb3;

async function fromBrowser() {
    let web3;

    if (window.ethereum) {
        web3 = new Web3(window.ethereum);

        try {
            // Kiểm tra xem ví đã kết nối chưa
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });

            if (accounts.length === 0) {
                // Nếu chưa kết nối thì mới yêu cầu kết nối
                await window.ethereum.request({ method: 'eth_requestAccounts' });
            }

            return web3;
        } catch (error) {
            console.log('User denied account access or error occurred', error);
            return null;
        }
    } else if (window.web3) {
        // Phiên bản cũ của MetaMask
        web3 = new Web3(window.web3.currentProvider);
        return web3;
    } else {
        // Không có MetaMask, dùng local provider
        const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
        web3 = new Web3(provider);
        return web3;
    }
}

async function getWeb3() {
    try {
        const web3 = await fromBrowser();
        if (web3) {
            return web3;
        } else {
            console.log("Could not connect to any blockchain provider.");
        }
    } catch (error) {
        console.log('Error connecting to the blockchain', error);
    }
}

// Tùy bạn có thể xóa dòng này nếu chỉ export hàm, không cần tự chạy
getWeb3();
