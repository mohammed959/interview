import { useForm } from "react-hook-form";
import classes from './Formcontainer.module.scss'
import { useIntl } from "react-intl";
import { Button } from "../../components/button/button";
import { useNavigate } from "react-router-dom";
import { Validation } from "../../components/validation/validation";
export const FormContainer = (): JSX.Element => {
    const intl = useIntl()
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isValid }
    } = useForm();

    const onSubmit = (data: any): void => {
        navigate("/verify", { state: { data } })
    };

    return (
        <div className="container">
            <form className={`${classes['form-1']} form-1`} style={{ borderRadius: '2%' }} onSubmit={handleSubmit(onSubmit)} >
                <h5 className={`${classes['title']}`}>{intl.formatMessage({ id: "firstpagetitle" })}</h5>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label htmlFor="iqama" className={`${classes.label}`}>{intl.formatMessage({ id: "iqamalabel" })}</label>
                        <input
                            {...register("iqama", {
                                required: true,
                                maxLength: 10,
                                minLength: 10, 
                            })}
                            type="number"
                            name="iqama"
                            id="iqama"
                            placeholder={intl.formatMessage({ id: "iqamaplaceholder" })}
                            className={`${classes.input}`}
                        />
                        <Validation errors={errors} style={`${classes.error}`}  />
                    </div>
                    <div className="flex flex-col">
                        <label className={`${classes.label}`} htmlFor="reference">{intl.formatMessage({ id: "referencelabel" })}</label>
                        <input
                            {...register("reference", {
                                required: true,
                                maxLength: 20,
                               
                            })}
                            type="number"
                            name="reference"
                            id="reference"
                            placeholder={intl.formatMessage({ id: "referenceplaceholder" })}
                            className={`${classes.input}`}
                        />
                        {errors?.reference?.type === "required" && isDirty && <span className={`${classes.error}`}>{intl.formatMessage({ id: "required" })}</span>}
                    </div>
                    <Button style={`${classes.verify} ${!isDirty || !isValid ? `bg-gray-300` : `bg-[#2dc28d]`}`} title={intl.formatMessage({ id: "verify" })} />
                </div>
            </form>
        </div>

    )
}
