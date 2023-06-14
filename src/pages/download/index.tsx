import { WhiteTab, WhiteTabs } from '@rebuildMui/Tabs/WhiteTab';
import { Badge, Button, Dialog, DialogTitle, Stack, styled } from '@mui/material';
import { useState } from 'react';
import Styles from './index.module.scss'
import { ArkBadge } from '@rebuildMui/Badge';
import BlackMenuItem from '@rebuildMui/MenuItem/BlackMenuItem';
import DownloadPath from './DownloadPath';
import OperationButtonGroup from './OperationButtonGroup';

interface DownloadPageProps {

}

const BadgeStyles = {
  color: '#fff',
  ".MuiBadge-badge": {
    fontSize: '0.3750rem',
    backgroundColor: 'transparent',
    minWidth: '0.9375rem',
    width: '0.9375rem',
    height: '0.9375rem',
    border: "1px solid #fff",
  }
}

const OperationButton = styled(Button)(({ theme }) => ({
  height: '2rem',
  padding: '0 1rem',
}))

const DownloadOperation = [
  <OperationButton key="1" startIcon={<i className="iconfont icon-24gl-playCircle" />}>全部开始</OperationButton>,
  <OperationButton key="2" startIcon={<i className="iconfont icon-24gl-pauseCircle" />}>全部暂停</OperationButton>,
  <OperationButton key="3" startIcon={<i className="iconfont icon-24gl-gear" />}>下载设置</OperationButton>,
]

const DownloadPage: React.FC<DownloadPageProps> = () => {

  const [value, setValue] = useState(0);

  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className={Styles.download_page}>
      <h2 className={Styles.title}>下载管理</h2>
      <WhiteTabs className={Styles.tabs} value={value} onChange={(event, newValue) => setValue(newValue)}>
        <WhiteTab label={
          <Badge badgeContent={1} sx={BadgeStyles}>
            下载中
          </Badge>
        } />
        <WhiteTab label={
          <ArkBadge color="default" sx={{
            color: '#fff',
          }}>
            已完成
          </ArkBadge>
        } />
      </WhiteTabs>
      <Stack justifyContent="space-between" flexDirection="row" alignItems="center">
        <DownloadPath />
        <OperationButtonGroup ButtonList={DownloadOperation} />
      </Stack>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>test</DialogTitle>
        <BlackMenuItem value="全部">全部</BlackMenuItem>
        <BlackMenuItem value="音频">音频</BlackMenuItem>
        <BlackMenuItem value="视频">视频</BlackMenuItem>
        <Button onClick={() => setDialogOpen(false)}>取消</Button>
      </Dialog>
    </div>
  );
}

export default DownloadPage;