import PostForm from "../../components/postForm/PostForm";


const AddProductMenu = () => {
    return (
        <div className="border mb-3 mt-3">
            <div className="card">
                <form className="p-3">
                    <PostForm />
                </form>
            </div>
        </div>
    );
};

export default AddProductMenu;