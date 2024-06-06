import { useContext, useState } from "react";
import Editor from "../../components/editor/Editor";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { updateProduct } from "../../api/products";


const UpdateProduct = () => {


    const { user } = useContext(AuthContext)

    const singleProduct = useLoaderData();

    const { productImgUrl, title, price, shortdescription, category, description, _id } = singleProduct;

    const [editorContent, setEditorContent] = useState(description);

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    const removeHtmlTags = (html) => {
        return html.replace(/<\/?[^>]+(>|$)/g, "");
    };

    const handleUpdateProducts = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = removeHtmlTags(editorContent);
        const price = form.price.value;
        const shortdescription = form.shortdescription.value;
        const category = form.category.value;
        const email = user.email;
        const productId = _id

        //image upload & save data to db;

        const productImage = form.image.files[0];
        const formData = new FormData();
        formData.append('image', productImage)

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBB_SECRET_API}`

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imageData => {
                const productImgUrl = imageData.data.display_url;

                const productInfo = { email, productId, title, description, price, shortdescription, category, productImgUrl };
                console.log(productInfo);

                //save product to db;

                updateProduct(productInfo)

                // Reset the editor content
                setEditorContent("");
                // Optionally reset the other form fields
                form.reset();

            }).catch(error => console.log(error))

    };


    return (
        <div>
            <div className="flex gap-4 mb-5">
            </div>
            <div className="border mb-3 mt-3">
                <div className="card">
                    <form onSubmit={handleUpdateProducts} className="p-3">
                        <div className='md:grid md:grid-cols-4 gap-3'>
                            <div className='col-span-3'>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black text-xl">Add New Product</span>
                                        </label>
                                        <input type="text" defaultValue={title} name="title" placeholder='Enter title' className="input input-bordered bg-white text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black text-xl">Description</span>
                                        </label>
                                        <Editor value={editorContent} onChange={handleEditorChange} />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black text-xl">Product Price</span>
                                        </label>
                                        <input type="number" min='1' name="price" defaultValue={price} placeholder='price' className="input input-bordered bg-white text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black text-xl">Product Short description</span>
                                        </label>
                                        <input type="text" name="shortdescription" defaultValue={shortdescription} className="input input-lg input-bordered bg-white text-black" required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-control mt-6 bg-white p-5 border">
                                    <label className="label">
                                        <span className="label-text text-black text-xl">Add Category</span>
                                    </label>
                                    <input type="text" name="category" defaultValue={category} placeholder='Enter category' className="input input-bordered bg-white text-black" required />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="fileInput" className="label">
                                        <span className="label-text bg-blue-500 text-white py-3 px-5 rounded">Update image</span>
                                    </label>
                                    <input type="file" name='image' id="fileInput" className="file-input file-input-bordered hidden file-input-accent bg-white" />
                                    <img src={productImgUrl} alt="" className="w-full h-32" />
                                </div>
                                <div className="form-control my-6 bg-white p-5 border">
                                    <label className="label">
                                        <span className="label-text text-black text-xl">Click to update Product</span>
                                    </label>
                                    <button className="btn btn-info">Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;