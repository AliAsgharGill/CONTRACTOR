import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import AccountsData from "./AccountsData";

const AccountOverview = () => {
  // const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  //   console.log(info?.source, value);

  return (
    <>
      <MainDivAside>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          padding="0 2rem 0 0"
        >
          <Title fontSize="2em" fontWeight="600" margin="3rem 0 1.5rem 5rem">
            Account Overview{" "}
          </Title>

          <Space.Compact size="large">
            <Input
              addonBefore={<SearchOutlined />}
              className="p-15 bg-[#0A5F59] fill-white rounded-xl   "
              placeholder="Search"
            />
          </Space.Compact>
        </Div>
        <Div margin="0 0 0 5rem" width="92.5%">
          <AccountsData />
        </Div>
      </MainDivAside>
    </>
  );
};

export default AccountOverview;
