import React, { useState } from 'react';

function State() {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("");

    const musbet = () => setNumber(number + 1);

    const menfi = () => setNumber(number > 0 ? number - 1 : 0);

    return (
        <>
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-4xl text-center mt-[100px] text-black">
                    {number}
                </h1>

                <div className="flex gap-3 mt-4">
                    <button
                        onClick={musbet}
                        className="bg-pink-400 p-2 text-2xl rounded-xl"
                    >
                        +
                    </button>

                    <button
                        onClick={menfi}
                        className="bg-orange-500 p-2 text-2xl rounded-xl text-white"
                    >
                        -
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center my-[100px] text-2xl flex-col gap-4">
                <h2>Ad axtar</h2>

                <p className="text-3xl bg-red-500 p-3 text-white rounded">
                    {name}
                </p>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border"
                />
            </div>


        </>
    );
}

export default State