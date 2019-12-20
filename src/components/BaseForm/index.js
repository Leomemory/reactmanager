import React from 'react'
import { Input, Select, Form, Button, Checkbox, Radio, DatePicker} from 'antd'
import utils from '../../utils/utils';
const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    initFormList = ()=>{
        const { getFieldDecorator } = this.props.form;
        
    }

    render() { 
        return (  
            <Form layout="inline">
            </Form>
        );
    }
}
 
export default FilterForm;