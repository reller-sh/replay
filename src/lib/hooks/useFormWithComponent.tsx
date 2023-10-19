import {FieldValues, FormProvider, useForm, UseFormProps, UseFormReturn} from "react-hook-form";
import React, {PropsWithChildren} from "react";


type UseFormWithComponent<TFieldValues extends FieldValues = FieldValues, TContext = any> = (
    onSubmit?: (data: TFieldValues) => void | undefined,
    formProps?: UseFormProps<TFieldValues, TContext> | undefined,
) => (
    {
        Form: React.FC<PropsWithChildren>
        formMethods: UseFormReturn<TFieldValues, TContext>
    }
)

export const useFormWithComponent: UseFormWithComponent = (onSubmit = () => {}, formProps = {}) => {

    const formMethods = useForm(formProps)

    const Former: React.FC<PropsWithChildren> = ({ children }) => (
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>{children}</form>
        </FormProvider>
    )

    const Form = React.memo(Former)

    return {
        Form,
        formMethods
    }
}