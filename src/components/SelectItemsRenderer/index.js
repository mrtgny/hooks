import React, {forwardRef, useEffect} from 'react'

const SelectItemsRenderer = forwardRef((props, ref) => {
    const {
        items,
        placeHolder,
        value,
        onChange,
        onSearch,
        defaultSelectFirstValue,
        mode,
        filterOption,
        valueField: _valueField,
        labelInValue,
        descriptionField: _descriptionField,
        selectFieldRenderer,
        optionsRenderer,
        ...rest
    } = props;
    const valueField = _valueField || 'id';
    const descriptionField = _descriptionField || 'name';

    useEffect(() => {
        if (defaultSelectFirstValue) {
            if (items.length && !value) {
                onChange(items[0][valueField])
            }
        }
    }, [defaultSelectFirstValue, items, valueField, value])

    const getValue = () => {
        if (labelInValue) {
            if (mode === "multiple")
                return (value || []).map(i => ({
                    value: i.value || i[valueField],
                    label: i.label || i[descriptionField],
                    key: i.key || i[valueField]
                }))
            return {value: value[valueField], label: value[descriptionField]}
        }
        return value;
    }

    return (
        <props.selectfieldRenderer
            {...rest}
            mode={mode}
            labelInValue={labelInValue}
            value={getValue()}
            ref={ref}
            showSearch
            placeholder={placeHolder}
            optionFilterProp="children"
            onChange={onChange}
            onSearch={onSearch}
        >
            {
                (items || []).map((item, index) => <props.optionsRenderer key={index}
                                                                          value={item[valueField]}>
                    {item[descriptionField]}
                </props.optionsRenderer>)
            }
        </props.selectfieldRenderer>
    );
});

export default SelectItemsRenderer
