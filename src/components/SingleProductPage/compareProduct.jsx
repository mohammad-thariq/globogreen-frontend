/* eslint-disable @next/next/no-img-element */
export default function CompareProduct(products) {
  console.log(products.products.specifications, "specifications");

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Feauters</span>
              </th>
              {products.products.phone.map((i) => (
                <th scope="col" className="px-6 py-3 cursor-pointer" key={i.name}>
                  <div className="flex flex-col items-center justify-center gap-[4px]">
                    <img
                      src={i.image}
                      className="w-16 md:w-32 max-w-full max-h-full"
                      alt="Apple Watch"
                    />
                    <p style={{ width: "150px", marginTop: "10px" }}>
                      {i.name}
                    </p>
                    <button className="mt-[10px] bg-[#23D24F] p-[10px] text-white rounded-[10px]">Add to Cart</button>
                  </div>
                </th>
              ))}
            </tr>
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left font-semibold text-gray-900 dark:text-white">
                   Price
                  </td>
                 {products.products.specifications[0].price?.map((i, Priceindex)=>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white" key={Priceindex}>
                   <p className="text-base"><span className="text-sm line-through text-qgray">{i.mrp}</span> {i.off}</p>
                  </td>
            )}
            </tr>
                  <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left font-semibold text-gray-900 dark:text-white">
                   Delivery
                  </td>
                 {products.products.specifications[0].Delivery?.map((i, Priceindex)=>
                  <td className="px-6 py-4  text-gray-900 dark:text-white" key={Priceindex}>
                   <p className=""> {i.date}</p>
                  </td>
            )}
            </tr>
                  <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left  font-semibold text-gray-900 dark:text-white">
                   Fingerprint Reader
                  </td>
                 {products.products.specifications[0].FingerprintReader?.map((i, Priceindex)=>
                  <td className="px-6 py-4  text-gray-900 dark:text-white" key={Priceindex}>
                   <p className=""> {i}</p>
                  </td>
            )}
            </tr>
                  <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left font-semibold text-gray-900 dark:text-white">
                   Display Size
                  </td>
                 {products.products.specifications[0].DisplaySize?.map((i, Priceindex)=>
                  <td className="px-6 py-4  text-gray-900 dark:text-white" key={Priceindex}>
                   <p className=""> {i}</p>
                  </td>
            )}
            </tr>
                  <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left font-semibold text-gray-900 dark:text-white">
                   Memory Capacity
                  </td>
                 {products.products.specifications[0].MemoryCapacity?.map((i, Priceindex)=>
                  <td className="px-6 py-4  text-gray-900 dark:text-white" key={Priceindex}>
                   <p className=""> {i}</p>
                  </td>
            )}
            </tr>
                  <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left font-semibold text-gray-900 dark:text-white">
                   Model Name
                  </td>
                 {products.products.specifications[0].ModelName?.map((i, Priceindex)=>
                  <td className="px-6 py-4  text-gray-900 dark:text-white" key={Priceindex}>
                   <p className=""> {i}</p>
                  </td>
            )}
            </tr>
                  <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left font-semibold  text-gray-900 dark:text-white">
                   Operating System
                  </td>
                 {products.products.specifications[0].OperatingSystem?.map((i, Priceindex)=>
                  <td className="px-6 py-4  text-gray-900 dark:text-white" key={Priceindex}>
                   <p className=""> {i}</p>
                  </td>
            )}
            </tr>
                  <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left font-semibold  text-gray-900 dark:text-white">
                   Connectivity Tech
                  </td>
                 {products.products.specifications[0].ConnectivityTech?.map((i, Priceindex)=>
                  <td className="px-6 py-4  text-gray-900 dark:text-white" key={Priceindex}>
                   <p className=""> {i}</p>
                  </td>
            )}
            </tr>
             <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="p-4 text-left font-semibold text-gray-900 dark:text-white">
                   Display Type
                  </td>
                 {products.products.specifications[0].DisplayType?.map((i, Priceindex)=>
                  <td className="px-6 py-4  text-gray-900 dark:text-white" key={Priceindex}>
                   <p className="">{i}</p>
                  </td>
            )}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
