import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';

export default function SideBarNav() {

    const treeHeading = [
        ["Intro"],
        ["Python"],
        ["Java"],
        ["C"],
        ["C#"],
        ["React"]
    ]
    return (
        <Box sx={{ minHeight: 352, minWidth: 250 }}>
            <SimpleTreeView>
                <TreeItem itemId="intro" label="Intro">
                    <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                    <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                    <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                </TreeItem>
                <TreeItem itemId="python" label="Python">
                    <TreeItem itemId="pickers-community" label="@mui/x-date-pickers" />
                    <TreeItem itemId="pickers-pro" label="@mui/x-date-pickers-pro" />
                </TreeItem>
                <TreeItem itemId="java" label="Java">
                    <TreeItem itemId="charts-community" label="@mui/x-charts" />
                    <TreeItem itemId="charts-pro" label="@mui/x-charts-pro" />
                </TreeItem>
                <TreeItem itemId="c" label="C">
                    <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
                    <TreeItem itemId="tree-view-pro" label="@mui/x-tree-view-pro" />
                </TreeItem>
                <TreeItem itemId="cSharp" label="C#">
                    <TreeItem itemId="cSharp-view-community" label="@mui/x-cSharp-view" />
                    <TreeItem itemId="cSharp-view-pro" label="@mui/x-tree-view-pro" />
                </TreeItem>
                <TreeItem itemId="react" label="React">
                    <TreeItem itemId="react-view-community" label="@mui/x-react-view" />
                    <TreeItem itemId="react-view-pro" label="@mui/x-tree-view-pro" />
                </TreeItem>
            </SimpleTreeView>
        </Box>
    );
}