try {
  (() => {
    var n = __REACT__,
      {
        Children: le,
        Component: ne,
        Fragment: se,
        Profiler: ie,
        PureComponent: ue,
        StrictMode: ce,
        Suspense: pe,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: me,
        cloneElement: de,
        createContext: be,
        createElement: Se,
        createFactory: Te,
        createRef: ye,
        forwardRef: _e,
        isValidElement: fe,
        lazy: Ce,
        memo: Ie,
        startTransition: ve,
        unstable_act: Oe,
        useCallback: I,
        useContext: Ee,
        useDebugValue: xe,
        useDeferredValue: ge,
        useEffect: x,
        useId: he,
        useImperativeHandle: ke,
        useInsertionEffect: Ae,
        useLayoutEffect: Re,
        useMemo: Le,
        useReducer: Be,
        useRef: R,
        useState: L,
        useSyncExternalStore: Me,
        useTransition: Pe,
        version: Ne,
      } = __REACT__;
    var Fe = __STORYBOOK_API__,
      {
        ActiveTabs: We,
        Consumer: Ge,
        ManagerContext: Ke,
        Provider: Ye,
        RequestResponseError: $e,
        addons: g,
        combineParameters: qe,
        controlOrMetaKey: ze,
        controlOrMetaSymbol: Ue,
        eventMatchesShortcut: je,
        eventToShortcut: Ze,
        experimental_requestResponse: Je,
        isMacLike: Qe,
        isShortcutTaken: Xe,
        keyToSymbol: et,
        merge: tt,
        mockChannel: ot,
        optionOrAltSymbol: rt,
        shortcutMatchesShortcut: at,
        shortcutToHumanString: lt,
        types: B,
        useAddonState: nt,
        useArgTypes: st,
        useArgs: it,
        useChannel: ut,
        useGlobalTypes: M,
        useGlobals: h,
        useParameter: ct,
        useSharedState: pt,
        useStoryPrepared: mt,
        useStorybookApi: P,
        useStorybookState: dt,
      } = __STORYBOOK_API__;
    var _t = __STORYBOOK_COMPONENTS__,
      {
        A: ft,
        ActionBar: Ct,
        AddonPanel: It,
        Badge: vt,
        Bar: Ot,
        Blockquote: Et,
        Button: xt,
        ClipboardCode: gt,
        Code: ht,
        DL: kt,
        Div: At,
        DocumentWrapper: Rt,
        EmptyTabContent: Lt,
        ErrorFormatter: Bt,
        FlexBar: Mt,
        Form: Pt,
        H1: Nt,
        H2: wt,
        H3: Vt,
        H4: Dt,
        H5: Ht,
        H6: Ft,
        HR: Wt,
        IconButton: N,
        IconButtonSkeleton: Gt,
        Icons: k,
        Img: Kt,
        LI: Yt,
        Link: $t,
        ListItem: qt,
        Loader: zt,
        Modal: Ut,
        OL: jt,
        P: Zt,
        Placeholder: Jt,
        Pre: Qt,
        ResetWrapper: Xt,
        ScrollArea: eo,
        Separator: w,
        Spaced: to,
        Span: oo,
        StorybookIcon: ro,
        StorybookLogo: ao,
        Symbols: lo,
        SyntaxHighlighter: no,
        TT: so,
        TabBar: io,
        TabButton: uo,
        TabWrapper: co,
        Table: po,
        Tabs: mo,
        TabsState: bo,
        TooltipLinkList: V,
        TooltipMessage: So,
        TooltipNote: To,
        UL: yo,
        WithTooltip: D,
        WithTooltipPure: _o,
        Zoom: fo,
        codeCommon: Co,
        components: Io,
        createCopyToClipboardFunction: vo,
        getStoryHref: Oo,
        icons: Eo,
        interleaveSeparators: xo,
        nameSpaceClassNames: go,
        resetComponents: ho,
        withReset: ko,
      } = __STORYBOOK_COMPONENTS__;
    var W = ({ active: o, title: t, icon: e, description: r, onClick: a }) =>
        n.createElement(
          N,
          { active: o, title: r, onClick: a },
          e && n.createElement(k, { icon: e, __suppressDeprecationWarning: !0 }),
          t ? `\xA0${t}` : null,
        ),
      G = ['reset'],
      K = (o) => o.filter((t) => !G.includes(t.type)).map((t) => t.value),
      b = 'addon-toolbars',
      Y = async (o, t, e) => {
        e &&
          e.next &&
          (await o.setAddonShortcut(b, {
            label: e.next.label,
            defaultShortcut: e.next.keys,
            actionName: `${t}:next`,
            action: e.next.action,
          })),
          e &&
            e.previous &&
            (await o.setAddonShortcut(b, {
              label: e.previous.label,
              defaultShortcut: e.previous.keys,
              actionName: `${t}:previous`,
              action: e.previous.action,
            })),
          e &&
            e.reset &&
            (await o.setAddonShortcut(b, {
              label: e.reset.label,
              defaultShortcut: e.reset.keys,
              actionName: `${t}:reset`,
              action: e.reset.action,
            }));
      },
      $ = (o) => (t) => {
        let {
            id: e,
            toolbar: { items: r, shortcuts: a },
          } = t,
          d = P(),
          [S, s] = h(),
          l = R([]),
          p = S[e],
          v = I(() => {
            s({ [e]: '' });
          }, [s]),
          O = I(() => {
            let m = l.current,
              i = m.indexOf(p),
              c = i === m.length - 1 ? 0 : i + 1,
              T = l.current[c];
            s({ [e]: T });
          }, [l, p, s]),
          u = I(() => {
            let m = l.current,
              i = m.indexOf(p),
              c = i > -1 ? i : 0,
              T = c === 0 ? m.length - 1 : c - 1,
              y = l.current[T];
            s({ [e]: y });
          }, [l, p, s]);
        return (
          x(() => {
            a &&
              Y(d, e, {
                next: { ...a.next, action: O },
                previous: { ...a.previous, action: u },
                reset: { ...a.reset, action: v },
              });
          }, [d, e, a, O, u, v]),
          x(() => {
            l.current = K(r);
          }, []),
          n.createElement(o, { cycleValues: l.current, ...t })
        );
      },
      H = ({ currentValue: o, items: t }) =>
        o != null && t.find((e) => e.value === o && e.type !== 'reset'),
      q = ({ currentValue: o, items: t }) => {
        let e = H({ currentValue: o, items: t });
        if (e) return e.icon;
      },
      z = ({ currentValue: o, items: t }) => {
        let e = H({ currentValue: o, items: t });
        if (e) return e.title;
      },
      U = ({ right: o, title: t, value: e, icon: r, hideIcon: a, onClick: d, currentValue: S }) => {
        let s = r && n.createElement(k, { style: { opacity: 1 }, icon: r }),
          l = { id: e ?? '_reset', active: S === e, right: o, title: t, icon: r, onClick: d };
        return r && !a && (l.icon = s), l;
      },
      j = $(
        ({
          id: o,
          name: t,
          description: e,
          toolbar: { icon: r, items: a, title: d, preventDynamicIcon: S, dynamicTitle: s },
        }) => {
          let [l, p] = h(),
            [v, O] = L(!1),
            u = l[o],
            m = !!u,
            i = r,
            c = d;
          S || (i = q({ currentValue: u, items: a }) || i),
            s && (c = z({ currentValue: u, items: a }) || c),
            !c && !i && console.warn(`Toolbar '${t}' has no title or icon`);
          let T = I(
            (y) => {
              p({ [o]: y });
            },
            [u, p],
          );
          return n.createElement(
            D,
            {
              placement: 'top',
              tooltip: ({ onHide: y }) => {
                let F = a
                  .filter(({ type: E }) => {
                    let A = !0;
                    return E === 'reset' && !u && (A = !1), A;
                  })
                  .map((E) =>
                    U({
                      ...E,
                      currentValue: u,
                      onClick: () => {
                        T(E.value), y();
                      },
                    }),
                  );
                return n.createElement(V, { links: F });
              },
              closeOnOutsideClick: !0,
              onVisibleChange: O,
            },
            n.createElement(W, { active: v || m, description: e || '', icon: i, title: c || '' }),
          );
        },
      ),
      Z = { type: 'item', value: '' },
      J = (o, t) => ({
        ...t,
        name: t.name || o,
        description: t.description || o,
        toolbar: {
          ...t.toolbar,
          items: t.toolbar.items.map((e) => {
            let r = typeof e == 'string' ? { value: e, title: e } : e;
            return (
              r.type === 'reset' &&
                t.toolbar.icon &&
                ((r.icon = t.toolbar.icon), (r.hideIcon = !0)),
              { ...Z, ...r }
            );
          }),
        },
      }),
      Q = () => {
        let o = M(),
          t = Object.keys(o).filter((e) => !!o[e].toolbar);
        return t.length
          ? n.createElement(
              n.Fragment,
              null,
              n.createElement(w, null),
              t.map((e) => {
                let r = J(e, o[e]);
                return n.createElement(j, { key: e, id: e, ...r });
              }),
            )
          : null;
      };
    g.register(b, () =>
      g.add(b, {
        title: b,
        type: B.TOOL,
        match: ({ tabId: o }) => !o,
        render: () => n.createElement(Q, null),
      }),
    );
  })();
} catch (e) {
  console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
