let menu = {
    status: 1,
    info: "获取成功",
    data: [
        // {
        //   id: "163",
        //   pid: "0",
        //   name: "贷款",
        //   app: "Admin",
        //   controller: "bank",
        //   action: "index",
        //   parameter: "",
        //   remark: "前台管理",
        //   type: "1",
        //   ajax: "0",
        //   width: "0",
        //   height: "0",
        //   fonts: "el-icon-bank-card", //icon
        //   listorder: "100",
        //   status: "1",
        //   is_show: "0",
        //   zmtek_ver: "0",
        //   sub_menu: [
        //     {
        //       id: "164",
        //       action: "list", //  路径2
        //       app: "Admin",
        //       controller: "bank", //路径1
        //       pid: "163",
        //       parameter: "",
        //       type: "1",
        //       fonts: "icon-shangcheng3",
        //       ajax: "0",
        //       name: "贷款列表" //meta nama  显示在tag
        //     },
        //     {
        //       id: "165",
        //       action: "details",
        //       app: "Admin",
        //       controller: "bank",
        //       pid: "163",
        //       parameter: "",
        //       type: "1",
        //       fonts: "desktop",
        //       ajax: "0",
        //       name: "贷款详情"
        //     }
        //   ]
        // },
        {
            id: "147",
            pid: "0",
            name: "产品",
            app: "Admin",
            controller: "loan",
            action: "index0",
            parameter: "",
            remark: "会员管理",
            type: "1",
            ajax: "0",
            width: "0",
            height: "0",
            fonts: "el-icon-shopping-bag-1", //icon
            listorder: "95",
            status: "1",
            is_show: "0",
            zmtek_ver: "0",
            sub_menu: [
                {
                    id: "148",
                    action: "list",
                    app: "Admin",
                    controller: "loan",
                    pid: "147",
                    parameter: "",
                    type: "1",
                    fonts: "desktop",
                    ajax: "0",
                    name: "产品列表"
                },
                /*{
                  id: "170",
                  action: "info",
                  app: "Admin",
                  controller: "loan",
                  pid: "147",
                  parameter: "",
                  type: "1",
                  fonts: "desktop",
                  ajax: "0",
                  name: "银行详情"
                }*/
            ]
        },
        {
            id: "148",
            pid: "0",
            name: "匹配",
            app: "Admin",
            controller: "match",
            action: "index0",
            parameter: "",
            remark: "会员管理",
            type: "1",
            ajax: "0",
            width: "0",
            height: "0",
            fonts: "el-icon-shopping-bag-1", //icon
            listorder: "95",
            status: "1",
            is_show: "0",
            zmtek_ver: "0",
            sub_menu: [
                {
                    id: "149",
                    action: "matchIndex",
                    app: "Admin",
                    controller: "match",
                    pid: "147",
                    parameter: "",
                    type: "1",
                    fonts: "desktop",
                    ajax: "0",
                    name: "匹配"
                },
                // {
                //   id: "149",
                //   action: "matchCompare",
                //   app: "Admin",
                //   controller: "match",
                //   pid: "147",
                //   parameter: "",
                //   type: "1",
                //   fonts: "desktop",
                //   ajax: "0",
                //   name: "匹配对比"
                // },
            ]
        }
    ]
};

export {menu};
