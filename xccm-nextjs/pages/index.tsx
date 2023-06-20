import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const compositions = () => {
    const router = useRouter()
    const [newDocumentTitle, setNewDocumentTitle] = useState('');
    const [creation, setCreation] = useState(false);

    const handleNewDocumentSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setCreation(false)
        if(newDocumentTitle !== ''){
            router.push('/creation/draft')
        }
    };
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="text-lg font-bold text-blue-600">Composix</div>
                <nav className="space-x-4">
                    <a href="#docs" className="text-blue-600 hover:underline">Docs</a>
                    <a href="#sheets" className="text-blue-600 hover:underline">Sheets</a>
                    <a href="#slides" className="text-blue-600 hover:underline">Slides</a>
                    <a href="#forms" className="text-blue-600 hover:underline">Forms</a>
                </nav>
                </div>
            </header>
            <main className="container m-auto mt-0 py-16">
                <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Your Documents</h1>
                <p className="text-lg mb-8">
                    Here are your saved documents. You can create new documents, edit existing ones, and collaborate with others in real-time.
                </p>
                <div className="bg-white rounded-lg shadow p-4 my-8 py-12">
                    <div className='py-6 mb-4 flex justify-center items-center'>
                        {creation 
                        ?(<form onSubmit={handleNewDocumentSubmit}>
                            <input
                                type="text"
                                className="border border-gray-300 rounded-md py-2 px-3 mb-2 mx-2"
                                placeholder="Enter document title"
                                value={newDocumentTitle}
                                onChange={(e) => setNewDocumentTitle(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-700"
                            >
                                Create Document
                            </button>
                        </form>)
                        : (<button onClick={() => setCreation(true)} className='h-16 w-16 border outline-none rounded-lg bg-blue-600 hover:bg-blue-700 flex justify-center items-center text-4xl text-white'>
                            +
                        </button>)
                        }
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="bg-white p-4 flex justify-between items-center w-[700px] border-b">
                            <Link href={'/creation/draft'} className="text-xl font-bold">Document 1</Link>
                            <p className="text-gray-500 mx-12">Last modified: June 15, 2023</p>
                            <p className="text-gray-500">Last modified: June 15, 2023</p>
                        </div>
                        <div className="bg-white p-4 flex justify-between items-center w-[700px] border-b">
                            <Link href={'/creation/draft'} className="text-xl font-bold">Document 1</Link>
                            <p className="text-gray-500 mx-12">Last modified: June 15, 2023</p>
                            <p className="text-gray-500">Last modified: June 15, 2023</p>
                        </div>
                        <div className="bg-white p-4 flex justify-between items-center w-[700px] border-b">
                            <Link href={'/creation/draft'} className="text-xl font-bold">Document 1</Link>
                            <p className="text-gray-500 mx-12">Last modified: June 15, 2023</p>
                            <p className="text-gray-500">Last modified: June 15, 2023</p>
                        </div>
                        <div className="bg-white p-4 flex justify-between items-center w-[700px] border-b">
                            <Link href={'/creation/draft'} className="text-xl font-bold">Document 1</Link>
                            <p className="text-gray-500 mx-12">Last modified: June 15, 2023</p>
                            <p className="text-gray-500">Last modified: June 15, 2023</p>
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <footer className="bg-white py-4">
                <div className="container mx-auto text-center">
                <p className="text-gray-500">&copy; 2023 Google Docs. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default compositions
