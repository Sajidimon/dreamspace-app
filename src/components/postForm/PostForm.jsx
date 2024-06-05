import EditorLayout from "../../layouts/editorLayout/EditorLayout";
import Editor from "../editor/Editor";


const PostForm = () => {
    return (
        <>
            <div className='md:grid md:grid-cols-4 gap-3'>
                <div className='col-span-3'>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-xl">Add New Product</span>
                            </label>
                            <input type="text" placeholder='Enter title' className="input input-bordered bg-white text-black" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black text-xl">Description</span>
                            </label>
                            <Editor />
                        </div>
                    </div>
                </div>
                <div>
                    <EditorLayout />
                </div>
            </div>
        </>
    );
};

export default PostForm;