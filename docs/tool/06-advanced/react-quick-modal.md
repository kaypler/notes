# 命令式弹窗

```tsx
import React from 'react';
import ReactDOM from 'react-dom';

export interface QuickActionModalProps {
  visible: boolean;
  onCancel: () => void;
}

export interface ModalWithQuickAction<T extends QuickActionModalProps> extends React.FC<T> {
  open: (props: Omit<T, keyof QuickActionModalProps>) => { destroy: () => void };
}

const addQuickAction = <T extends QuickActionModalProps>(
  Modal: React.FC<T>,
  extraProps?: Omit<T, keyof QuickActionModalProps>,
) => (props: Omit<T, keyof QuickActionModalProps>) => {
  const div = document.createElement('div');
  const ref = React.createRef<{
    close: () => void;
  }>();

  const destroy = () => {
    ref.current?.close();
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div);
      if (div.parentElement) div.parentElement.removeChild(div);
    }, 300);
  };

  const render = () => {
    const Component = () => {

      const [visible, setVisible] = React.useState(false);

      React.useImperativeHandle(ref, () => ({
        close: () => {
          setVisible(false);
        }
      }));

      React.useEffect(() => {
        setVisible(true);
      }, []);

      return ReactDOM.createPortal(
        <Modal
          {...({ ...(extraProps || {}), ...props, visible, onCancel: destroy } as T)}
        />,
        document.body
      );
    };

    ReactDOM.render(<Component />, div);
  };

  render();
  return {
    destroy,
  };
};

export const CreateQuickActionModal = <T extends QuickActionModalProps>(Modal: React.FC<T>, extraProps?: Omit<T, keyof QuickActionModalProps>) => {
  Object.assign(Modal, {
    open: addQuickAction(Modal, extraProps),
  });
  return Modal as ModalWithQuickAction<T>;
};
```