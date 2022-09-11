// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gBGqaUF3C5CQvEpDAhmCMe
// Component: dbQA7aKj93t
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import { useScreenVariants as useScreenVariantsojSgcPkSvUubm } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Oj_sgcPKSvUUBM/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_ebook.module.css"; // plasmic-import: gBGqaUF3C5CQvEpDAhmCMe/projectcss
import sty from "./PlasmicMerci.module.css"; // plasmic-import: dbQA7aKj93t/css

import PlayingCardHeartShapesvgIcon from "./icons/PlasmicIcon__PlayingCardHeartShapesvg"; // plasmic-import: EqyKEX400BvG3m/icon
import BlackCommentsBubbleSvgrepoComsvgIcon from "./icons/PlasmicIcon__BlackCommentsBubbleSvgrepoComsvg"; // plasmic-import: O7PZi_7_tKwG4d/icon

export type PlasmicMerci__VariantMembers = {};

export type PlasmicMerci__VariantsArgs = {};
type VariantPropType = keyof PlasmicMerci__VariantsArgs;
export const PlasmicMerci__VariantProps = new Array<VariantPropType>();

export type PlasmicMerci__ArgsType = {
  validEmail?: boolean;
};

type ArgPropType = keyof PlasmicMerci__ArgsType;
export const PlasmicMerci__ArgProps = new Array<ArgPropType>("validEmail");

export type PlasmicMerci__OverridesType = {
  root?: p.Flex<"div">;
  foreground2?: p.Flex<"div">;
};

export interface DefaultMerciProps {}

function PlasmicMerci__RenderFunc(props: {
  variants: PlasmicMerci__VariantsArgs;
  args: PlasmicMerci__ArgsType;
  overrides: PlasmicMerci__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          validEmail: false
        },
        props.args
      ),
    [props.args]
  );

  const $props = args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsojSgcPkSvUubm()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__bMdDr)}>
                <div className={classNames(projectcss.all, sty.freeBox__rgEvQ)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zaiTw)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__egz0K)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__cfkLh
                        )}
                      >
                        <h1
                          className={classNames(
                            projectcss.all,
                            projectcss.h1,
                            projectcss.__wab_text,
                            sty.h1__zOlzo
                          )}
                        >
                          {"Le Body Challenge"}
                        </h1>
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__dFl2M
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__oei7I
                          )}
                        >
                          <p.PlasmicLink
                            className={classNames(
                              projectcss.all,
                              projectcss.a,
                              sty.link__jbSaM
                            )}
                            component={Link}
                            platform={"nextjs"}
                          >
                            {false ? (
                              <svg
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__g7Kxc
                                )}
                                role={"img"}
                              />
                            ) : null}
                            {false ? (
                              <svg
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__g7Nm
                                )}
                                role={"img"}
                              />
                            ) : null}

                            <PlayingCardHeartShapesvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__sprje
                              )}
                              role={"img"}
                            />
                          </p.PlasmicLink>

                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__x1B7
                            )}
                          >
                            {false ? (
                              <svg
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__v2G7R
                                )}
                                role={"img"}
                              />
                            ) : null}

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__oXkgG
                              )}
                            >
                              {"32k Likes "}
                            </div>

                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link__sddPa
                              )}
                              component={Link}
                              platform={"nextjs"}
                            >
                              <BlackCommentsBubbleSvgrepoComsvgIcon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg___7C1Tk
                                )}
                                role={"img"}
                              />

                              {false ? (
                                <svg
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__d2Hq
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                              {false ? (
                                <svg
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__tRYi
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                            </p.PlasmicLink>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__sJsli
                              )}
                            >
                              {"312 Commentaires"}
                            </div>

                            {false ? (
                              <svg
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__vtpOw
                                )}
                                role={"img"}
                              />
                            ) : null}
                            {true ? (
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox___4JblF
                                )}
                              >
                                <p.PlasmicLink
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.a,
                                    sty.link___9WFkC
                                  )}
                                  component={Link}
                                  platform={"nextjs"}
                                >
                                  {false ? (
                                    <svg
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__atdCp
                                      )}
                                      role={"img"}
                                    />
                                  ) : null}
                                  {false ? (
                                    <svg
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__digsy
                                      )}
                                      role={"img"}
                                    />
                                  ) : null}

                                  <svg
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__mbgml
                                    )}
                                    role={"img"}
                                  />
                                </p.PlasmicLink>
                              </div>
                            ) : null}
                          </p.Stack>
                        </p.Stack>
                      </p.Stack>
                    </p.Stack>
                  </p.Stack>
                </div>

                {true ? (
                  <p.Stack
                    as={"div"}
                    data-plasmic-name={"foreground2"}
                    data-plasmic-override={overrides.foreground2}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.foreground2)}
                  >
                    {true ? (
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__xs6R
                        )}
                      >
                        {true ? (
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__b91PS
                            )}
                          >
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox___4Cq3M
                              )}
                            >
                              <h1
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h1,
                                  projectcss.__wab_text,
                                  sty.h1__dCbky
                                )}
                              >
                                {"Merci !"}
                              </h1>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__abXig
                                )}
                              >
                                {
                                  "Tu vas bientôt recevoir ton e-book \ndans ta boîte mail"
                                }
                              </div>
                            </p.Stack>
                          </div>
                        ) : null}
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </div>
            ) : null}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__cnzEv)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__jHwA7)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__l0MNj)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__yK4HO
                      )}
                    >
                      {"© MyCapsule. All rights reserved."}
                    </div>
                  </p.Stack>
                </div>
              ) : null}
            </p.Stack>
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "foreground2"],
  foreground2: ["foreground2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  foreground2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMerci__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMerci__VariantsArgs;
    args?: PlasmicMerci__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMerci__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMerci__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMerci__ArgProps,
          internalVariantPropNames: PlasmicMerci__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMerci__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMerci";
  } else {
    func.displayName = `PlasmicMerci.${nodeName}`;
  }
  return func;
}

export const PlasmicMerci = Object.assign(
  // Top-level PlasmicMerci renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    foreground2: makeNodeComponent("foreground2"),

    // Metadata about props expected for PlasmicMerci
    internalVariantProps: PlasmicMerci__VariantProps,
    internalArgProps: PlasmicMerci__ArgProps
  }
);

export default PlasmicMerci;
/* prettier-ignore-end */