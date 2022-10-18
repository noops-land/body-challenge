// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: gBGqaUF3C5CQvEpDAhmCMe
// Component: j3C2E3ZS0nhWm
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
import TextInput from "../../TextInput"; // plasmic-import: k5f_ZGrtjLf/component
import Button from "../../Button"; // plasmic-import: RWHbPnNRUlA/component

import { useScreenVariants as useScreenVariantsojSgcPkSvUubm } from "../ebook/PlasmicGlobalVariant__Screen"; // plasmic-import: Oj_sgcPKSvUUBM/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "../ebook/plasmic_ebook.module.css"; // plasmic-import: gBGqaUF3C5CQvEpDAhmCMe/projectcss
import sty from "./PlasmicAccueil.module.css"; // plasmic-import: j3C2E3ZS0nhWm/css

import PlayingCardHeartShapesvgIcon from "../ebook/icons/PlasmicIcon__PlayingCardHeartShapesvg"; // plasmic-import: EqyKEX400BvG3m/icon
import BlackCommentsBubbleSvgrepoComsvgIcon from "../ebook/icons/PlasmicIcon__BlackCommentsBubbleSvgrepoComsvg"; // plasmic-import: O7PZi_7_tKwG4d/icon
import SearchsvgIcon from "../ebook/icons/PlasmicIcon__Searchsvg"; // plasmic-import: -90nyNh7VQn/icon
import ChecksvgIcon from "../ebook/icons/PlasmicIcon__Checksvg"; // plasmic-import: _bdPyp6gOc1JbC/icon

export type PlasmicAccueil__VariantMembers = {
  merci: "merci";
};

export type PlasmicAccueil__VariantsArgs = {
  merci?: SingleBooleanChoiceArg<"merci">;
};

type VariantPropType = keyof PlasmicAccueil__VariantsArgs;
export const PlasmicAccueil__VariantProps = new Array<VariantPropType>("merci");

export type PlasmicAccueil__ArgsType = {
  validEmail?: boolean;
};

type ArgPropType = keyof PlasmicAccueil__ArgsType;
export const PlasmicAccueil__ArgProps = new Array<ArgPropType>("validEmail");

export type PlasmicAccueil__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  form?: p.Flex<"form">;
  email?: p.Flex<typeof TextInput>;
  validIcon?: p.Flex<"svg">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultAccueilProps {}

function PlasmicAccueil__RenderFunc(props: {
  variants: PlasmicAccueil__VariantsArgs;
  args: PlasmicAccueil__ArgsType;
  overrides: PlasmicAccueil__OverridesType;

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

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsojSgcPkSvUubm()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicAccueil.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicAccueil.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicAccueil.pageMetadata.title}
        />
      </Head>

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
              sty.root,
              { [sty.rootmerci]: hasVariant(variants, "merci", "merci") }
            )}
          >
            {true ? (
              <div className={classNames(projectcss.all, sty.freeBox__gq50D)}>
                <div className={classNames(projectcss.all, sty.freeBox__srRov)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ahFnr)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__uhmEj)}
                    >
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__esLEg
                        )}
                      >
                        <p.PlasmicImg
                          data-plasmic-name={"img"}
                          data-plasmic-override={overrides.img}
                          alt={"LE BODY CHALLENGE" as const}
                          className={classNames(sty.img)}
                          displayHeight={
                            hasVariant(globalVariants, "screen", "mobileOnly")
                              ? ("100px" as const)
                              : ("100px" as const)
                          }
                          displayMaxHeight={"none" as const}
                          displayMaxWidth={"none" as const}
                          displayMinHeight={"0" as const}
                          displayMinWidth={"0" as const}
                          displayWidth={"auto" as const}
                          loading={"eager" as const}
                          src={{
                            src: "/plasmic/ebook/images/bodyChallengeLogopng.png",
                            fullWidth: 406,
                            fullHeight: 378,
                            aspectRatio: undefined
                          }}
                        />
                      </p.Stack>

                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__hXzTj
                        )}
                      >
                        {true ? (
                          <p.Stack
                            as={"div"}
                            hasGap={true}
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__pnHe4
                            )}
                          >
                            <p.PlasmicLink
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link__dIgov
                              )}
                              component={Link}
                              platform={"nextjs"}
                            >
                              {false ? (
                                <svg
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__oDne
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                              {false ? (
                                <svg
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__t2O32
                                  )}
                                  role={"img"}
                                />
                              ) : null}

                              <PlayingCardHeartShapesvgIcon
                                className={classNames(
                                  projectcss.all,
                                  sty.svg__oKxsZ
                                )}
                                role={"img"}
                              />
                            </p.PlasmicLink>

                            {true ? (
                              <p.Stack
                                as={"div"}
                                hasGap={true}
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__hsq8Y
                                )}
                              >
                                {false ? (
                                  <svg
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__kNjG
                                    )}
                                    role={"img"}
                                  />
                                ) : null}

                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__xkXGi
                                  )}
                                >
                                  {"32k Likes "}
                                </div>

                                <p.PlasmicLink
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.a,
                                    sty.link__aCiKy
                                  )}
                                  component={Link}
                                  platform={"nextjs"}
                                >
                                  <BlackCommentsBubbleSvgrepoComsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__yiY9V
                                    )}
                                    role={"img"}
                                  />

                                  {false ? (
                                    <svg
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__anrEg
                                      )}
                                      role={"img"}
                                    />
                                  ) : null}
                                  {false ? (
                                    <svg
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__t1EhT
                                      )}
                                      role={"img"}
                                    />
                                  ) : null}
                                </p.PlasmicLink>

                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__h4QkP
                                  )}
                                >
                                  {"312 Commentaires"}
                                </div>

                                {false ? (
                                  <svg
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg___2Eqmc
                                    )}
                                    role={"img"}
                                  />
                                ) : null}
                                {true ? (
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox__eR728
                                    )}
                                  >
                                    <p.PlasmicLink
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.a,
                                        sty.link__ugn7O
                                      )}
                                      component={Link}
                                      platform={"nextjs"}
                                    >
                                      {false ? (
                                        <svg
                                          className={classNames(
                                            projectcss.all,
                                            sty.svg__bhFaq
                                          )}
                                          role={"img"}
                                        />
                                      ) : null}
                                      {false ? (
                                        <svg
                                          className={classNames(
                                            projectcss.all,
                                            sty.svg__mu9Ck
                                          )}
                                          role={"img"}
                                        />
                                      ) : null}

                                      <svg
                                        className={classNames(
                                          projectcss.all,
                                          sty.svg__sz5Gv
                                        )}
                                        role={"img"}
                                      />
                                    </p.PlasmicLink>
                                  </div>
                                ) : null}
                              </p.Stack>
                            ) : null}
                          </p.Stack>
                        ) : null}
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
                          sty.freeBox__nmbaV
                        )}
                      >
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___2Qyp,
                            {
                              [sty.freeBoxmerci___2QyPeXEfC]: hasVariant(
                                variants,
                                "merci",
                                "merci"
                              )
                            }
                          )}
                        >
                          <h1
                            data-plasmic-name={"h1"}
                            data-plasmic-override={overrides.h1}
                            className={classNames(
                              projectcss.all,
                              projectcss.h1,
                              projectcss.__wab_text,
                              sty.h1,
                              {
                                [sty.h1merci]: hasVariant(
                                  variants,
                                  "merci",
                                  "merci"
                                )
                              }
                            )}
                          >
                            {hasVariant(variants, "merci", "merci") ? (
                              "Merci !"
                            ) : hasVariant(
                                globalVariants,
                                "screen",
                                "mobileOnly"
                              ) ? (
                              <React.Fragment>
                                <React.Fragment>
                                  {"Ton E-Book fitness "}
                                </React.Fragment>
                                <span
                                  className={
                                    "plasmic_default__all plasmic_default__span"
                                  }
                                  style={{ textDecorationLine: "underline" }}
                                >
                                  {"gratuit"}
                                </span>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <React.Fragment>
                                  {"Ton E-Book fitness "}
                                </React.Fragment>
                                <span
                                  className={
                                    "plasmic_default__all plasmic_default__span"
                                  }
                                  style={{ textDecorationLine: "underline" }}
                                >
                                  {"gratuit"}
                                </span>
                              </React.Fragment>
                            )}
                          </h1>

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__kjbni,
                              {
                                [sty.textmerci__kjbnieXEfC]: hasVariant(
                                  variants,
                                  "merci",
                                  "merci"
                                )
                              }
                            )}
                          >
                            {hasVariant(variants, "merci", "merci")
                              ? "Tu vas bientôt recevoir ton e-book \ndans ta boîte mail"
                              : "Indique ton email pour le recevoir :"}
                          </div>

                          {(
                            hasVariant(variants, "merci", "merci") ? true : true
                          ) ? (
                            <p.Stack
                              as={"form"}
                              data-plasmic-name={"form"}
                              data-plasmic-override={overrides.form}
                              hasGap={true}
                              action={
                                "https://bodychallenge.cloudcall.fr/webhook/ebook" as const
                              }
                              className={classNames(projectcss.all, sty.form, {
                                [sty.formmerci]: hasVariant(
                                  variants,
                                  "merci",
                                  "merci"
                                )
                              })}
                              method={"post" as const}
                            >
                              <TextInput
                                data-plasmic-name={"email"}
                                data-plasmic-override={overrides.email}
                                autocomplete={"email" as const}
                                className={classNames(
                                  "__wab_instance",
                                  sty.email,
                                  {
                                    [sty.emailmerci]: hasVariant(
                                      variants,
                                      "merci",
                                      "merci"
                                    )
                                  }
                                )}
                                endIcon={
                                  (() => {
                                    try {
                                      return $props.validEmail;
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return true;
                                      }
                                      throw e;
                                    }
                                  })() ? (
                                    <ChecksvgIcon
                                      className={classNames(
                                        projectcss.all,
                                        sty.svg__sd1N1
                                      )}
                                      role={"img"}
                                    />
                                  ) : null
                                }
                                name={"email" as const}
                                placeholder={"email" as const}
                                required={true}
                                showEndIcon={true}
                                startIcon={
                                  <SearchsvgIcon
                                    data-plasmic-name={"validIcon"}
                                    data-plasmic-override={overrides.validIcon}
                                    className={classNames(
                                      projectcss.all,
                                      sty.validIcon
                                    )}
                                    role={"img"}
                                  />
                                }
                                type={"email" as const}
                              />

                              <Button
                                data-plasmic-name={"button"}
                                data-plasmic-override={overrides.button}
                                className={classNames(
                                  "__wab_instance",
                                  sty.button
                                )}
                              >
                                {"Recevoir mon e-book fitness"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </p.Stack>
                      </div>
                    ) : null}
                  </p.Stack>
                ) : null}
              </div>
            ) : null}

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__htHZi)}
            >
              {true ? (
                <div className={classNames(projectcss.all, sty.freeBox__kEYtq)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__yQtP7)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xI0D0
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
  root: [
    "root",
    "img",
    "foreground2",
    "h1",
    "form",
    "email",
    "validIcon",
    "button"
  ],
  img: ["img"],
  foreground2: ["foreground2", "h1", "form", "email", "validIcon", "button"],
  h1: ["h1"],
  form: ["form", "email", "validIcon", "button"],
  email: ["email", "validIcon"],
  validIcon: ["validIcon"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  foreground2: "div";
  h1: "h1";
  form: "form";
  email: typeof TextInput;
  validIcon: "svg";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAccueil__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAccueil__VariantsArgs;
    args?: PlasmicAccueil__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAccueil__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAccueil__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAccueil__ArgProps,
          internalVariantPropNames: PlasmicAccueil__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAccueil__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAccueil";
  } else {
    func.displayName = `PlasmicAccueil.${nodeName}`;
  }
  return func;
}

export const PlasmicAccueil = Object.assign(
  // Top-level PlasmicAccueil renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    email: makeNodeComponent("email"),
    validIcon: makeNodeComponent("validIcon"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicAccueil
    internalVariantProps: PlasmicAccueil__VariantProps,
    internalArgProps: PlasmicAccueil__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Le BODY CHALLENGE : ton E-Book fitness gratuit !",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAccueil;
/* prettier-ignore-end */
