import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faBath, faBed, faCar, faCity, faLocationArrow, faTh } from '@fortawesome/free-solid-svg-icons'
import p1 from '../../../images/properties/1.jpg';
import { useForm } from "react-hook-form";

const Property = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="single-property-area mt-5 container mx-auto">
            <div className="property-details">
                <div className="flex flex-auto justify-center border-t-2 border-b-2 p-2">
                    <h2 className="flex-auto m-1">$56000</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faLocationArrow} /> Location: Dempra, Dhaka</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faLocationArrow} /> Area: 12500sqt</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faBed} /> Beds: 4</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faBath} /> Bath: 3</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faCity} /> Floor: 3</h2>
                    <h2 className="flex-auto m-1"><FontAwesomeIcon icon={faCar} /> Garage: 1</h2>
                </div>

                <div className="property-img mt-1 w-full grid sm:grid-cols-1 lg:grid-cols-2 p-4">
                    <div className="img mr-3 mt-1">
                        <img src={p1} alt="" className="rounded-lg" />
                    </div>
                    <div className="spec-details  bg-gray-700 rounded-lg mt-1">
                        <h2 className='text-3xl font-semibold text-gray-100 p-2'>Property Specification:</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faArrowAltCircleRight} /> Builder: AGS Housing Pvt Ltd</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faTh} /> Area (sq.ft): 12500</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faArrowAltCircleRight} /> Type: Home</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faLocationArrow} /> Location: Dempra, Dhaka</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faLocationArrow} /> Area: 12500sqt</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faBed} /> Beds: 4</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faBath} /> Bath: 3</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faCity} /> Floor: 3</h2>
                        <h2 className="p-2 text-gray-100 font-semibold text-left"><FontAwesomeIcon icon={faCar} /> Garage: 1</h2>
                    </div>
                </div>

                <div className="property-overview text-left p-4">
                    <div className="details border-gray-400 border rounded-lg p-2">
                        <p className="text-lg font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime obcaecati, facilis corrupti delectus sed perferendis quae, voluptatum accusantium possimus dolorum ipsum! Id nobis maxime ad fugit quis omnis sit culpa expedita adipisci ipsa? Ipsum maxime incidunt perspiciatis nesciunt numquam maiores. Id voluptatem alias at explicabo illum eveniet exercitationem laboriosam suscipit adipisci nam odio ipsam aspernatur obcaecati nostrum sunt error distinctio, quasi dolorem placeat eum, deleniti sequi! Quibusdam praesentium nam nemo repudiandae magnam, atque recusandae optio quaerat vel laboriosam ducimus, tempora quos consectetur repellendus. Provident error eum ea qui, libero sint in, magnam tempore expedita tempora mollitia, ex molestiae! Rem dolore tempore itaque qui quibusdam, eveniet excepturi sequi consectetur similique cum quidem, pariatur sint inventore laborum expedita delectus! Expedita velit numquam ipsum a pariatur accusamus sint veritatis eius fuga, sequi quibusdam quidem nulla blanditiis eveniet ex vitae, sapiente magnam voluptas dolores harum animi, repellendus exercitationem at. Fugiat magni impedit perferendis minima quo laudantium aspernatur quam fuga corrupti ex eos temporibus repellat earum qui repudiandae quidem atque explicabo, error ullam, facere quasi deserunt. Dicta, nemo explicabo harum asperiores adipisci ea corrupti? Nam aut dolore dignissimos reiciendis adipisci autem fugiat perspiciatis est eveniet voluptates! Autem libero quod rem porro similique illum quas. Consectetur, nulla id perferendis cumque autem culpa, impedit magni sed voluptatum excepturi dolores officia recusandae dolore, odit maxime reprehenderit. Possimus consectetur, iure illum consequatur iusto quae ex, culpa nulla consequuntur, molestias tempore cumque porro placeat. Voluptate, harum? Odit ducimus, rem reprehenderit laudantium enim adipisci quaerat distinctio? Ut autem quos repellendus dolores?</p>
                    </div>
                </div>

                <div className="query-form m-10">
                    <h2 className="text-3xl font-bold text-blue-400 text-center">Make a Query</h2>

                    <section className=" py-1 bg-blueGray-50">
                        <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                                <div className="rounded-t bg-white mb-0 px-6 py-6">
                                    <div className="text-center flex justify-between">
                                        <h6 className="text-blueGray-700 text-xl font-bold">
                                            Submit a query
                                        </h6>
                                        <button className="bg-blue-400 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
                                            Buy Property
                                        </button>
                                    </div>
                                </div>
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            User Information
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Name
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="lucky.jesse" {...register("name", { required: true })} />
                                                    {errors.name && <span className="text-red-500">This field is required</span>}
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Email address
                                                    </label>
                                                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="jesse@example.com" {...register("email", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Phone Number
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="01864090759" {...register("phone", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Telephone
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Jesse" {...register("telephone", { required: true })} />
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                                        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                            Contact Information
                                        </h6>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-12/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Address
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" {...register("address", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        City
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="New York" {...register("city", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Country
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="United States" {...register("country", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-4/12 px-4">
                                                <div className="relative w-full mb-3">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                                        Postal Code
                                                    </label>
                                                    <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Postal Code" {...register("postal", { required: true })} />
                                                </div>
                                            </div>
                                            <div className="w-full">
                                                <button className="bg-blue-400 text-gray-100 font-bold text-xl px-10 py-2 rounded-lg">Submit</button>
                                            </div>
                                        </div>

                                        <hr className="mt-6 border-b-1 border-blueGray-300" />



                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Property;