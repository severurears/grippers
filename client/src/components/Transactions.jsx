import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import dummyData from '../utils/dummyData';
import { shortenAddress } from '../utils/shortenAddress';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
    return (
        <div className="bg=[#181918] m-4 flex flex-1 flex-col p-3 rounded-md hover:shadow-2xl">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="display-flex justify-start w-full mb-6 p-2">
                    <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
                    <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
                    <p className="text-white text-base">Amount: {amount} ETH</p>
                    <div className="bg-black p-4 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                        <p className="text-[#37c7da] font-bold">{timestamp}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Transactions = () => {
    const { currentAccount } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col py-12 px-4">
                {/* Latest Transactions */}
                {currentAccount ? (
                    <h3 className="text-white text-3xl text-center my-2">Latest Transactions</h3>
                ) : (
                    <h3 className="text-white text-3xl text-center my-2">Connect your account to see the latest transactions</h3>
                )}

                <div className="flex flex-wrap justify-center items-center mt-10">
                    {dummyData.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Transactions;