import React, {useState, useEffect} from 'react'
import AnimatedPage from '../Components/AnimatedPage'
import Balance from '../Components/Balance'
import { callController } from '../Utils/endpointHandler'

function Histories() {
    const [mapData, setMapData] = useState<any>(null as any)
    useEffect(() => {
        const action=(result:any)=>{
            console.log('result history', typeof result.transactions.p1);
            (result.transactions.length > 0) && setMapData(result.transactions.p1)
        }
      
        callController('', 'account/history', 'get', {}, [], action, '', '', 'silent')
    
      return () => {
        
      }
    }, [])
    
  return (
    <>
        <AnimatedPage name="trans-0">
            <div className='w-[90%] mx-auto overflow-auto h-full p-2 bg-[#fbfafa] mt-[70px] flex-column justify-center items-center'>
                <Balance />
            <table className="min-w-full border-collapse block md:table mt-10">
		<thead className="block md:table-header-group">
			<tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Ledger</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Signature(s)</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Memo</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">From</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">No. of Operations</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Status</th>
				<th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody className="block md:table-row-group">
            {
                mapData && mapData.map((data:any, index:any)=>{
                    return (<tr key={data.id} className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">{data.ledger_attr}</span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">{data.signatures.length}</span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">{data.memo_type == 'text' ? data.memo : 'Nill'}</span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">{data.source_account}</span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">{data.operation_count}</span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">{data.success == true ? 'success' : 'failed'}</span></td>
                        <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
				</td>
			</tr>)
                })
            }
			{/* <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Jamal Rios</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>jrios1</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>jrios@icloud.com</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>582-3X2-6233</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
				</td>
			</tr>
			<tr className="bg-white border border-grey-500 md:border-none block md:table-row">
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Name</span>Erwin Campbell</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">User Name</span>ecampbell088</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Email Address</span>ecampbell088@hotmail.com</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold">Mobile</span>318-685-X414</td>
				<td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
					<span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded">View</button>
				</td>
			</tr> */}
					
		</tbody>
	</table>
            </div>
        </AnimatedPage>
    </>
  )
}

export default Histories

