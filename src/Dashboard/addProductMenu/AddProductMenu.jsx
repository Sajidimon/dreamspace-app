import Editor from "../../components/editor/Editor";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { saveProducts } from "../../api/products";



const AddProductMenu = () => {

    const { user } = useContext(AuthContext)

    const [editorContent, setEditorContent] = useState("");

    const handleEditorChange = (content) => {
        setEditorContent(content);
    };

    const removeHtmlTags = (html) => {
        return html.replace(/<\/?[^>]+(>|$)/g, "");
    };

    const handleProducts = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = removeHtmlTags(editorContent);
        const price = form.price.value;
        const shortdescription = form.shortdescription.value;
        const category = form.category.value;
        const email = user.email;

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

                const productInfo = { email, title, description, price, shortdescription, category, productImgUrl };
                console.log(productInfo);

                //save product to db;

                saveProducts(productInfo)
                
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
                    <form onSubmit={handleProducts} className="p-3">
                        <div className='md:grid md:grid-cols-4 gap-3'>
                            <div className='col-span-3'>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black text-xl">Add New Product</span>
                                        </label>
                                        <input type="text" name="title" placeholder='Enter title' className="input input-bordered bg-white text-black" required />
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
                                        <input type="number" min='1' name="price" placeholder='price' className="input input-bordered bg-white text-black" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-black text-xl">Product Short description</span>
                                        </label>
                                        <input type="text" name="shortdescription" className="input input-lg input-bordered bg-white text-black" required />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-control mt-6 bg-white p-5 border">
                                    <label className="label">
                                        <span className="label-text text-black text-xl">Add Category</span>
                                    </label>
                                    <input type="text" name="category" placeholder='Enter category' className="input input-bordered bg-white text-black" required />
                                </div>
                                <div className="form-control mt-6 bg-white p-5 border">
                                    <label className="label">
                                        <span className="label-text text-black text-xl">Product Image</span>
                                    </label>
                                    <input type="file" name="image" className="file-input bg-white file-input-bordered file-input-info file-input-sm" />
                                </div>
                                <div className="form-control my-6 bg-white p-5 border">
                                    <label className="label">
                                        <span className="label-text text-black text-xl">Click to Publish Product</span>
                                    </label>
                                    <button className="btn btn-info">Publish</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProductMenu;