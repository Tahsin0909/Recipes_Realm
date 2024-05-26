import { useForm } from "react-hook-form";

const AddRecipes = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="h-[100vh] pt-24 md:pt-32">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" readOnly {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddRecipes;