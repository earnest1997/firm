import Button from '../components/button'
import ButtonGroup from '../components/button-group'
import Input from '../components/Input'
import Icon from '../components/icon'
import Collapse from '../components/collapse'
import CollapseItem from '../components/collapse-item'
import Row from '../components/layout/row'
import Table from '../components/table'
import Upload from '../components/Upload'
import Progress from '../components/progress'
import Popover from '../components/popover'

const components = [
    Button,
    Icon,
    Collapse,
    CollapseItem,
    Row,
    ButtonGroup,
    Table,
    Upload,
    Progress,
    Input,
    Popover
]

const install = function (Vue) {
    components.forEach(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue)

export default {
    version: '0.0.1',
    install,
    Button,
    Input,
    Icon,
    Table,
    Upload,
    Progress,
    Popover
}

