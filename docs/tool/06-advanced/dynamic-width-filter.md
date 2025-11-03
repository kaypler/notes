# 动态宽度筛选框

```tsx
import './index.less';

import { debounce } from 'lodash';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Checkbox, IconArrowDownOutline, IconArrowUpOutline } from 'antd';

interface OptionType {
  label: string | JSX.Element;
  value: any;
  disabled?: boolean;
  [key: string]: any;
}

interface DynamicWidthFilterProps {
  label: string;
  options: OptionType[];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
}

const clsPrefix = 'dynamic-width-filter';

const DynamicWidthFilter: React.FC<DynamicWidthFilterProps> = (props) => {
  const { label, options, defaultValue, onChange } = props;

  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const [isCalculated, setIsCalculated] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCount, setShowCount] = useState(0);
  const [localValue, setLocalValue] = useState<string[]>(defaultValue || []);

  const isAllSelected = useMemo(() => {
    return localValue.length > 0 && localValue.length === options.length;
  }, [localValue, options]);

  const displayOptions = useMemo(() => {
    if (isExpanded) {
      return options;
    }
    if (showCount) {
      return options.slice(0, showCount);
    }
    return [];
  }, [isExpanded, options, showCount]);

  const calculateLayout = useCallback(() => {
    if (!containerRef.current || !maskRef.current || !options.length) return;

    const containerWidth = containerRef.current.offsetWidth;
    const expandElement = maskRef.current.querySelector(`.${clsPrefix}-expand`) as HTMLElement;
    const expandWidth = expandElement?.offsetWidth || 0;
    // 获取所有选项元素
    const optionElements = Array.from(maskRef.current.querySelectorAll(`.${clsPrefix}-option`) || []);
    let rowWidth = 0;
    let count = 0;

    for (let i = 0; i < optionElements.length; i++) {
      const element = optionElements[i];
      const elementWidth = (element as HTMLElement).offsetWidth;

      if (rowWidth + elementWidth > containerWidth) {
        break;
      }

      rowWidth += elementWidth;
      count += 1;
    }

    if (count !== optionElements.length && rowWidth + expandWidth > containerWidth) {
      count--;
    }

    // 减去1是因为select all元素占位
    setShowCount(count - 1);
    setIsCalculated(true);
  }, [options]);

  useEffect(() => {
    if (isExpanded) return;

    const resizeObserver = new ResizeObserver(debounce(() => {
      setIsCalculated(false);
      setTimeout(calculateLayout, 0);
    }, 100));

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [calculateLayout, isExpanded]);

  const renderExpandedOption = () => {
    return (
      <div
        key={'expand'}
        className={`${clsPrefix}-expand`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded
          ? <span>{$gt('Collapse')}<IconArrowUpOutline /></span>
          : <span>{$gt('More')}<IconArrowDownOutline /></span>
        }
      </div>
    );
  };

  const handleSelectAll = (checked: boolean) => {
    const newLocalValue = checked ? options.map(option => option.value) : [];
    setLocalValue(newLocalValue);
    onChange?.(newLocalValue);
  };

  const handleSelect = (value: string, checked: boolean) => {
    const newLocalValue = checked ? [...localValue, value] : localValue.filter(v => v !== value);
    setLocalValue(newLocalValue);
    onChange?.(newLocalValue);
  };

  const renderOptions = (_options: OptionType[], showExpand: boolean) => {
    return (
      <>
        <div key={'all'} className={`${clsPrefix}-option`}>
          <Checkbox
            checked={isAllSelected}
            indeterminate={!isAllSelected && localValue.length > 0}
            onChange={e => handleSelectAll(e.target.checked)}
          >
            {$gt('Select All')}
          </Checkbox>
        </div>
        {_options.map((option) => (
          <div key={option.value} className={`${clsPrefix}-option`}>
            <Checkbox
              checked={localValue.includes(option.value)}
              onChange={e => handleSelect(option.value, e.target.checked)}
            >
              {option.label}
            </Checkbox>
          </div>
        ))}
        {showExpand && showCount < options.length && renderExpandedOption()}
      </>
    );
  };

  return (
    <div className={clsPrefix}>
      <label className={`${clsPrefix}-label`}>{label}:</label>
      <div className={`${clsPrefix}-options`} ref={containerRef}>
        {renderOptions(displayOptions, isCalculated)}
        {/* 计算阶段显示所有选项（隐藏状态，仅用于测量） */}
        {!isCalculated && (
          <div className={`${clsPrefix}-options-mask`} ref={maskRef}>
            {renderOptions(options, true)}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderErrorFilter;
```

index.less
```less
.dynamic-width-filter {
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;

  &-label {
    flex-shrink: 0;
    padding: 8px 0;
    margin-right: 16px;
    font-size: 14px;
    line-height: 16px;
    color: var(--color-text-paragraph);
  }

  &-options {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    &-mask {
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      visibility: hidden;
      pointer-events: none;
    }

    .antd-checkbox-wrapper {
      margin-bottom: 0 !important;
    }
    .antd-checkbox-children {
      margin-right: 0 !important;
    }

    .antd-checkbox-inner {
      transition: border-color .3s;
    }
  }

  &-option, &-expand {
    height: 32px;
    padding: 8px;
  }

  &-expand {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--color-info);
  }
}
```
