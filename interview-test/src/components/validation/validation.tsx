import { useIntl } from "react-intl"
type ValidationProps = {
    errors?: undefined | any | string,
    style: string,
}

export const Validation = ({ errors, style }: ValidationProps) => {
    const intl = useIntl()
    console.log(errors?.iqama?.type)
    return (
        <>
            {errors?.iqama?.type && <span className={`${style}`}>{intl.formatMessage({ id: `${errors?.iqama?.type}` })}</span>}
        </>
    )
}