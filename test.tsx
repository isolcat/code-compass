import { defineComponent, PropType, computed, ref, watchEffect, nextTick } from 'vue';
import './table.css';

interface TableProps {
  data: any[];
  stripe?: boolean;
  border?: boolean;
  height?: number;
  maxHeight?: number;
  itemsPerPage?: number; // 添加每页显示条数为可选属性
}

export default defineComponent({
  name: 'CTable',
  props: {
    data: {
      type: Array as PropType<TableProps['data']>,
      required: true,
    },
    stripe: Boolean,
    border: Boolean,
    height: Number,
    maxHeight: Number,
    itemsPerPage: { // 新增分页属性
      type: Number,
      default: 10, // 默认每页显示10条
    },
  },
  setup(props) {
    const currentPage = ref(1); // 当前页码
    const paginatedData = ref([]);

    // 计算表头标题
    const tableTitle = computed(() => {
      const arr = props.data.map(item => Object.keys(item));
      let newArr: string[] = [];
      arr.forEach(item => {
        newArr = item.length >= newArr.length ? item : newArr;
      });
      return newArr;
    });

    // 计算当前页的数据
    watchEffect(() => {
      const start = (currentPage.value - 1) * props.itemsPerPage;
      const end = start + props.itemsPerPage;
      paginatedData.value = props.data.slice(start, end);
      console.log(paginatedData.value, 'paginatedData.value')
    });

    // 表格样式
    const style = computed(() => ({
      borderStyle: 'none',
      height: props.height ? `${props.height}px` : undefined,
      maxHeight: props.maxHeight ? `${props.maxHeight}px` : undefined,
    }));

    // 分页控件的逻辑
    const totalPages = computed(() => Math.ceil(props.data.length / props.itemsPerPage));
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        console.log(currentPage.value, '222');
      }
    };
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    return () => (
      <div>
        <div class={`c-table ${props.border ? 'border' : ''}`} style={style.value}>
          <table>
            <thead>
              <tr>
                {tableTitle.value.map((item, index) => (
                  <th key={index}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.value.map((item, index) => ( // 在这里声明 index
                <tr key={item.id} style={{ backgroundColor: props.stripe && index % 2 === 0 ? '#fafafa' : '#fff' }}>
                  {tableTitle.value.map((key, keyIndex) => ( // 如果需要，这里也声明 key 的索引
                    <td key={keyIndex}>{item[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="pagination-controls">
          <button onClick={prevPage} disabled={currentPage.value <= 1}>Prev</button>
          <span>Page {currentPage.value} of {totalPages.value}</span>
          <button onClick={nextPage} disabled={currentPage.value >= totalPages.value}>Next</button>
        </div>
      </div>
    );
  },
});
