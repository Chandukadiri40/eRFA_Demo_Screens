import React, { useState } from 'react';

const containerStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: 'auto'
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  fontWeight: 'bold'
};

const dropdownStyle = {
  padding: '8px',
  marginBottom: '20px',
  width: '100%',
  border: '1px solid #ddd',
  borderRadius: '4px'
};

const fieldContainerStyle = {
  marginTop: '20px'
};

const inputTextStyle = {
  display: 'block',
  width: '100%',
  padding: '8px',
  marginBottom: '10px',
  border: '1px solid #ddd',
  borderRadius: '4px'
};

const checkboxContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '10px'
};

const checkboxLabelStyle = {
  marginLeft: '8px'
};

const selectListStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px'
};

export const NewRequest = () => {
    const [fieldType, setFieldType] = useState('');
    const [fields, setFields] = useState([]);

    const handleDropdownChange = (e) => {
        const selectedValue = e.target.value;
        if (selectedValue) {
            addField(selectedValue);
            setFieldType(''); // Reset dropdown after adding field
        }
    };

    const addField = (type) => {
        setFields(prevFields => [...prevFields, { type, id: Date.now() }]);
    };

    const renderField = (type, index) => {
        switch (type) {
            case 'textbox':
                
                return(<div><h4>TeaxtBox</h4><input key={index} type="text" style={inputTextStyle} placeholder="Enter text" /></div> );
            case 'checkbox':
                return (
                    <div>
                    <h4>CheckBox</h4>
                    <div key={index} style={checkboxContainerStyle}>
                        
                        <input type="checkbox" />
                        <label style={checkboxLabelStyle}>Checkbox</label>
                    </div>
                    </div>
                );
            case 'list':
                return (
                    <div>
                    <h4>List</h4>
                    <select key={index} style={selectListStyle}>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                    </select>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div style={containerStyle}>
            <label htmlFor="dropdown" style={labelStyle}>Select Field Type:</label>
            <select
                id="dropdown"
                onChange={handleDropdownChange}
                value={fieldType}
                style={dropdownStyle}
            >
                <option value="">--Select--</option>
                <option value="textbox">Text Box</option>
                <option value="checkbox">Checkbox</option>
                <option value="list">List</option>
            </select>

            <div style={fieldContainerStyle}>
                {fields.map((field, index) => renderField(field.type, index))}
            </div>
        </div>
    );
};
