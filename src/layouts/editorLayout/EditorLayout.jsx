import AddCategory from "../../components/addCategory/AddCategory";
import FeaturedImg from "../../components/featuredImage/FeaturedImg";
import PublishButton from "../../components/publishButton/PublishButton";


const EditorLayout = () => {
    return (
        <>
            <AddCategory />
            <FeaturedImg />
            <PublishButton />
        </>
    );
};

export default EditorLayout;