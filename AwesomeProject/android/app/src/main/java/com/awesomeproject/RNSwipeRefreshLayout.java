package com.awesomeproject;

import android.util.Log;
import android.view.ViewGroup;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by cyl on 18-9-11.
 */

public class RNSwipeRefreshLayout extends ViewGroupManager<SwipeRefreshLayout> {

    private static final String STOP_REFRESH_METHOD_NAME = "stopRefreshing"; // 交互方法名
    private static final int STOP_REFRESH_METHOD_ID = 1; // 交互命令ID

    private static final String SET_ENABLED_METHOD_NAME = "setEnabled"; // 交互方法名
    private static final int SET_ENABLED_METHOD_ID = 2; // 交互命令ID

    @Override
    public String getName() {
        return "RNSwipeRefreshLayout";
    }

    @Override
    protected SwipeRefreshLayout createViewInstance(final ThemedReactContext reactContext) {
        final SwipeRefreshLayout refreshLayout = new SwipeRefreshLayout(reactContext);
        refreshLayout.setLayoutParams(new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        refreshLayout.setEnabled(true);
        refreshLayout.setDirection(SwipeRefreshLayoutDirection.BOTH);
        refreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh(SwipeRefreshLayoutDirection direction) {
                Log.d("[onRefresh]", direction.name());
                if (direction == SwipeRefreshLayoutDirection.BOTTOM) {
                    reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                            refreshLayout.getId(), // RN层原生层根据id绑定在一起
                            "onBottomRefresh", // 事件名称
                            null // 传递的数据
                    );
                } else if(direction == SwipeRefreshLayoutDirection.TOP) {
                    reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                            refreshLayout.getId(), // RN层原生层根据id绑定在一起
                            "onTopRefresh", // 事件名称
                            null // 传递的数据
                    );
                }
            }
        });
        return refreshLayout;
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.<String, Integer>builder()
                .put(STOP_REFRESH_METHOD_NAME, STOP_REFRESH_METHOD_ID)
                .put(SET_ENABLED_METHOD_NAME, SET_ENABLED_METHOD_ID)
                .build();
    }

    @Override
    public void receiveCommand(SwipeRefreshLayout root, int commandId, @Nullable ReadableArray args) {
        Log.d("[receiveCommand]", "" + commandId);
        switch (commandId){
            case STOP_REFRESH_METHOD_ID:
                root.setRefreshing(false);
                break;
            case SET_ENABLED_METHOD_ID:
                if(args != null) {
                    boolean enabled = args.getBoolean(0);//获取第一个位置的数据
                    root.setEnabled(enabled);
                }
                break;
            default:
                break;
        }
    }

    @Nullable
    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        //第一个Login 注册的名字  第二个registrationName不可以改变 第三个js回调方法
        return MapBuilder.<String, Object>builder()
                .put("onTopRefresh", MapBuilder.of("registrationName", "onTopRefresh"))
                .put("onBottomRefresh", MapBuilder.of("registrationName", "onBottomRefresh"))
                .build();
    }
}
